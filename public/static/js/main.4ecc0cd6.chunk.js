(this["webpackJsonpproject-management-client"]=this["webpackJsonpproject-management-client"]||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(28),o=c.n(r),i=(c(34),c(35),c(3)),s=c(4),j=c(2),l=c(6),u=c.n(l),b=c(0),h=a.a.createContext();function p(e){var t=Object(n.useState)(!1),c=Object(j.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(!0),i=Object(j.a)(o,2),s=i[0],l=i[1],p=Object(n.useState)(null),d=Object(j.a)(p,2),O=d[0],x=d[1],g=function(){var e=localStorage.getItem("authToken");e?u.a.get("".concat("https://final-project-boilerplate.herokuapp.com/api","/auth/verify"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;x(t),r(!0),l(!1)})).catch((function(e){r(!1),x(null),l(!1)})):l(!1)};return Object(n.useEffect)((function(){g()}),[]),Object(b.jsx)(h.Provider,{value:{isLoggedIn:a,isLoading:s,user:O,logInUser:function(e){localStorage.setItem("authToken",e),g()},logOutUser:function(){localStorage.removeItem("authToken"),r(!1),x(null)}},children:e.children})}var d=function(){var e=Object(n.useContext)(h),t=e.isLoggedIn,c=e.user,a=e.logOutUser;return Object(b.jsxs)("nav",{children:[Object(b.jsx)(s.b,{to:"/",children:Object(b.jsx)("button",{children:"Home"})}),"-",t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(s.b,{to:"/projects",children:Object(b.jsx)("button",{children:"Projects"})}),Object(b.jsx)("button",{onClick:a,children:"Logout"}),Object(b.jsx)("span",{children:c.name})]}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(s.b,{to:"/signup",children:[" ",Object(b.jsx)("button",{children:"Signup"})," "]}),Object(b.jsxs)(s.b,{to:"/login",children:[" ",Object(b.jsx)("button",{children:"Login"})," "]})]})]})};var O=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Home Page"})})},x=c(11);var g=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),s=i[0],l=i[1];return Object(b.jsxs)("div",{className:"AddProject",children:[Object(b.jsx)("h3",{children:"Add Project"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={title:a,description:s},n=localStorage.getItem("authToken");u.a.post("".concat("https://final-project-boilerplate.herokuapp.com/api","/api/projects"),c,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){r(""),l(""),e.refreshProjects()})).catch((function(e){return console.log(e)}))},children:[Object(b.jsx)("label",{children:"Title:"}),Object(b.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("label",{children:"Description:"}),Object(b.jsx)("textarea",{type:"text",name:"description",value:s,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Submit"})]})]})};var m=function(e){var t=e.title,c=e.description,n=e._id;return Object(b.jsxs)("div",{className:"ProjectCard card",children:[Object(b.jsx)(s.b,{to:"/projects/".concat(n),children:Object(b.jsx)("h3",{children:t})}),Object(b.jsxs)("p",{style:{maxWidth:"400px"},children:[c," "]})]})};var f=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=function(){var e=localStorage.getItem("authToken");u.a.get("".concat("https://final-project-boilerplate.herokuapp.com/api","/api/projects"),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){r()}),[]),Object(b.jsxs)("div",{className:"ProjectListPage",children:[Object(b.jsx)(g,{refreshProjects:r}),null===c||void 0===c?void 0:c.map((function(e){return Object(b.jsx)(m,Object(x.a)({},e),e._id)}))]})};var v=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),s=i[0],l=i[1];return Object(b.jsxs)("div",{className:"AddTask",children:[Object(b.jsx)("h3",{children:"Add New Task"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c=e.projectId,n={title:a,description:s,projectId:c},o=localStorage.getItem("authToken");u.a.post("".concat("https://final-project-boilerplate.herokuapp.com/api","/api/tasks"),n,{headers:{Authorization:"Bearer ".concat(o)}}).then((function(t){r(""),l(""),e.refreshProject()})).catch((function(e){return console.log(e)}))},children:[Object(b.jsx)("label",{children:"Title:"}),Object(b.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("label",{children:"Description:"}),Object(b.jsx)("textarea",{type:"text",name:"description",value:s,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Add Task"})]})]})};var S=function(e){var t=e.title,c=e.description;return Object(b.jsxs)("div",{className:"TaskCard card",children:[Object(b.jsx)("h3",{children:t}),Object(b.jsx)("h4",{children:"Description:"}),Object(b.jsx)("p",{children:c})]})};var k=function(e){var t=Object(n.useState)(null),c=Object(j.a)(t,2),a=c[0],r=c[1],o=e.match.params.id,i=function(){var e=localStorage.getItem("authToken");u.a.get("".concat("https://final-project-boilerplate.herokuapp.com/api","/api/projects/").concat(o),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;r(t)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){i()}),[]),Object(b.jsxs)("div",{className:"ProjectDetails",children:[a&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:a.title}),Object(b.jsx)("p",{children:a.description})]}),Object(b.jsx)(v,{refreshProject:i,projectId:o}),a&&a.tasks.map((function(e){return Object(b.jsx)(S,Object(x.a)({},e),e._id)})),Object(b.jsx)(s.b,{to:"/projects",children:Object(b.jsx)("button",{children:"Back to projects"})}),Object(b.jsx)(s.b,{to:"/projects/edit/".concat(o),children:Object(b.jsx)("button",{children:"Edit Project"})})]})},P="https://final-project-boilerplate.herokuapp.com/api";var y=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),s=i[0],l=i[1],h=e.match.params.id;return Object(n.useEffect)((function(){var e=localStorage.getItem("authToken");u.a.get("".concat(P,"/api/projects/").concat(h),{headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){var t=e.data;r(t.title),l(t.description)})).catch((function(e){return console.log(e)}))}),[h]),Object(b.jsxs)("div",{className:"EditProjectPage",children:[Object(b.jsx)("h3",{children:"Edit the Project"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={title:a,description:s},n=localStorage.getItem("authToken");u.a.put("".concat(P,"/api/projects/").concat(h),c,{headers:{Authorization:"Bearer ".concat(n)}}).then((function(t){e.history.push("/projects/".concat(h))}))},children:[Object(b.jsx)("label",{children:"Title:"}),Object(b.jsx)("input",{type:"text",name:"title",value:a,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("label",{children:"Description:"}),Object(b.jsx)("textarea",{name:"description",value:s,onChange:function(e){return l(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Update Project"})]}),Object(b.jsx)("button",{onClick:function(){var t=localStorage.getItem("authToken");u.a.delete("".concat(P,"/api/projects/").concat(h),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(){return e.history.push("/projects")})).catch((function(e){return console.log(e)}))},children:"Delete Project"})]})};var C=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),l=i[0],h=i[1],p=Object(n.useState)(""),d=Object(j.a)(p,2),O=d[0],x=d[1],g=Object(n.useState)(void 0),m=Object(j.a)(g,2),f=m[0],v=m[1];return Object(b.jsxs)("div",{className:"SignupPage",children:[Object(b.jsx)("h1",{children:"Sign Up"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={email:a,password:l,name:O};u.a.post("".concat("https://final-project-boilerplate.herokuapp.com/api","/auth/signup"),c).then((function(t){return e.history.push("/login")})).catch((function(e){var t=e.response.data.message;v(t)}))},children:[Object(b.jsx)("label",{children:"Email:"}),Object(b.jsx)("input",{type:"text",name:"email",value:a,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("label",{children:"Password:"}),Object(b.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){return h(e.target.value)}}),Object(b.jsx)("label",{children:"Name:"}),Object(b.jsx)("input",{type:"text",name:"name",value:O,onChange:function(e){return x(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Sign Up"})]}),f&&Object(b.jsx)("p",{className:"error-message",children:f}),Object(b.jsx)("p",{children:"Already have account?"}),Object(b.jsx)(s.b,{to:"/login",children:" Login"})]})};var T=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),a=c[0],r=c[1],o=Object(n.useState)(""),i=Object(j.a)(o,2),l=i[0],p=i[1],d=Object(n.useState)(void 0),O=Object(j.a)(d,2),x=O[0],g=O[1],m=Object(n.useContext)(h).logInUser;return Object(b.jsxs)("div",{className:"LoginPage",children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault();var c={email:a,password:l};u.a.post("".concat("https://final-project-boilerplate.herokuapp.com/api","/auth/login"),c).then((function(t){console.log("JWT token",t.data.authToken);var c=t.data.authToken;m(c),e.history.push("/")})).catch((function(e){var t=e.response.data.message;g(t)}))},children:[Object(b.jsx)("label",{children:"Email:"}),Object(b.jsx)("input",{type:"text",name:"email",value:a,onChange:function(e){return r(e.target.value)}}),Object(b.jsx)("label",{children:"Password:"}),Object(b.jsx)("input",{type:"password",name:"password",value:l,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Login"})]}),x&&Object(b.jsx)("p",{className:"error-message",children:x}),Object(b.jsx)("p",{children:"Don't have an account yet?"}),Object(b.jsx)(s.b,{to:"/signup",children:" Sign Up"})]})},I=c(14);var L=function(e){var t=e.to,c=e.exact,a=e.component,r=Object(I.a)(e,["to","exact","component"]),o=Object(n.useContext)(h),s=o.isLoggedIn;return o.isLoading?Object(b.jsx)("p",{children:"Loading ..."}):s?Object(b.jsx)(i.b,Object(x.a)({to:t,exact:c,component:a},r)):Object(b.jsx)(i.a,{to:"/login"})};var A=function(e){var t=e.to,c=e.exact,a=e.component,r=Object(I.a)(e,["to","exact","component"]),o=Object(n.useContext)(h),s=o.isLoggedIn;return o.isLoading?Object(b.jsx)("p",{children:"Loading ..."}):s?Object(b.jsx)(i.a,{to:"/"}):Object(b.jsx)(i.b,Object(x.a)({to:t,exact:c,component:a},r))};var N=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(d,{}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",component:O}),Object(b.jsx)(L,{exact:!0,path:"/projects",component:f}),Object(b.jsx)(L,{exact:!0,path:"/projects/:id",component:k}),Object(b.jsx)(L,{exact:!0,path:"/projects/edit/:id",component:y}),Object(b.jsx)(A,{exact:!0,path:"/signup",component:C}),Object(b.jsx)(A,{exact:!0,path:"/login",component:T})]})]})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))};o.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(p,{children:Object(b.jsx)(N,{})})})}),document.getElementById("root")),D()}},[[60,1,2]]]);
//# sourceMappingURL=main.4ecc0cd6.chunk.js.map