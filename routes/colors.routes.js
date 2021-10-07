const { isAuthenticated } = require('./../middleware/jwt.middleware.js');
const router = require("express").Router();

const User = require("../models/users.model");
const Api = require("../service/ApiHandler");
const Color = require("../models/colors.model.js");
const ColorAPI = new Api();
const randomColor = require('randomcolor'); 



router.get('/random-scheme',(req, res)=>{
    let colors = randomColor({count:5})
   colors = colors.map ((color)=>{
    return color.substring (1)      })
    let schemeArray =[]

    colors.forEach((color)=>{ 
      ColorAPI
    .getColor(color.toString()) 
    .then((result) => { console.log(result.data.seed.hex.value)
        schemeArray.push({image:result.data.image.bare, hex:result.data.seed.hex.clean})
        if(schemeArray.length === 5 ){
         //res.send(result)
          res.json( schemeArray )
        } 
    })
    .catch(err => console.log(err));
     
    })
    
})



router.get("/scheme/:color",(req, res)=>{
    console.log(res)
   const gradient = req.params.color 
   ColorAPI
   .getGradientScheme(gradient)
   .then((scheme)=>{
       res.json(scheme.data)
       //res.send(scheme.data)
   


   })
   .catch(err => console.log(err));
})


//router.get('/profile', (req, res) => { console.log(req)
    //User
      //.findOne(req.user._id)
      //.populate('favourites')
      //.then((user) =>{
       // res.json( user );
      //})
      //.catch((error) => console.log(error))
  //});

/* ADD COLOR FAVOURITE IN YOUR PROFILE PAGE */
router.post("/add-favourite", (req, res, next) => { 
  const {hex,image,id}= req.body
  console.log("req.body",req.body)
  Color.create({color:hex.toString(),image})
  
  .then((color)=>{
    //console.log(color)
    User
    .findByIdAndUpdate(id,{$push : {favourites : color._id}})
    .then(()=>{
        res.status(200)
    })
  })
  .catch((error)=>{
  console.log(error)
  })

  });


  router.post('/fav', (req, res) => { //console.log(req)
   console.log(req.body)
   

    User
      .findById(req.body.id)
      .populate('favourites')
      .then((user) =>{
        res.json( user )
      })
      .catch((error) => console.log(error))
  });

/* DELATE FAVOURITE */
  router.delete("/deleteFav/:colorId",isAuthenticated,(req,res,next)=>{ console.log("----------")
    //const id = req.body.id
    const {colorId} = req.params
    //console.log(req.body)
    console.log(req.payload._id)
    
      User
     .findByIdAndUpdate(req.payload._id,{$pull : {favourites :colorId}})
     .then(()=>{
      res.status(200).json({message:"ha ido bien"})
     })
     .catch(err => 
      console.log(err))
    
   
})


//RANKING ROUTE

router.get("/ranking",(req,res,next)=>{
  const colorArray =[]
  Color.find()
  .then ((colors)=>{
    //console.log(colors)
    colors.forEach((color)=>{
      User.find({favourites:color._id})
      .then((ranking)=>{
     
     const colorRank = {color:color,rank:ranking.length}
     colorArray.push(colorRank)
     if(colorArray.length === colors.length){
       res.json(colorArray)
     }
     
     
     })
     .catch(err => 
      console.log(err))
    })
    
  }
  )

  .catch ((err)=>{
    console.log(err)
    
  }
  )
})











module.exports = router;