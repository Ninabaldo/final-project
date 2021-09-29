const { isAuthenticated } = require('./../middleware/jwt.middleware.js');
const router = require("express").Router();

const User = require("../models/users.model");
const Api = require("../service/ApiHandler");
const ColorAPI = new Api()
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


router.get('/profile', (req, res) => { console.log(req)
    User
      .findOne(req.user._id)
      .populate('favourites')
      .then((user) =>{
        res.json( user );
      })
      .catch((error) => console.log(error))
  });





module.exports = router;