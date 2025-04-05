const express = require("express");

const connectDB=require("./config/database");
const app = express(); //instance was created
const User= require("./models/user");




//app.use  ==> handle any type of method

// app.use("/user",()=>{
//     //route handle
// })

//1.

//what will return from api call
// app.use("/user",(req,res)=>{

//   console.log("Hi this from server side")

// })

//the post man api call is still  sending request .................pending state

// .....................................2..............................//

// ... one route can have multiple route handlers

//2.1

// we will get first Reponse

// app.use(
//   "/user",
//   (req, res) => {
//     res.send("This is from Response 1");
//   },
//   (req, res) => {
//     res.send("This is from Response 2");
//   }
// );

//2.2

// app.use(
//   "/user",
//   (req, res) => {
//    // res.send("This is from Response 1")
//   },
//   (req, res) => {
//     res.send("This is from Response 2");
//   }
// );

//2.3

//next()

// app.use(
//     "/user",
//     (req, res,next) => {
//      // res.send("This is from Response 1")
//      next()
//     },
//     (req, res) => {
//       res.send("This is from Response 2");
//     }
//   );

//2.4

// app.use(
//     "/user",
//     (req, res,next) => {
//      res.send("This is from Response 1")
//      next();
//     },
//     (req, res) => {
//         console.log("response 2 inside")
//       res.send("This is from Response 2");
//     }
//   );

//2.5

// app.use(
//     "/user",
//     (req, res,next) => {
//      next()
//      res.send("This is from Response 1")
//     },
//     (req, res) => {
//       res.send("This is from Response 2");
//     }
//   );

//2.6

// app.use(
//   "/user",
//   (req, res, next) => {
//     // res.send("This is from Response 1")
//     next();
//   },
//   (req, res, next) => {
//     //res.send("This is from Response 2");
//     next();
//   },
//   (req, res, next) => {
//     res.send("This is from Response 3");
//     next();
//   },
//   (req, res, next) => {
//     //res.send("This is from Response 2");
//     next();
//   },
//   (req, res, next) => {
//     //res.send("This is from Response 2");
//     next();
//   }
// );


//2.7 


// app.use(
//     "/user",
//     (req, res, next) => {
//       // res.send("This is from Response 1")
//       next();
//     },
//     (req, res, next) => {
//       //res.send("This is from Response 2");
//       next();
//     },
//     (req, res, next) => {
//      // res.send("This is from Response 3");
//       next();
//     },
//     (req, res, next) => {
//       //res.send("This is from Response 2");
//       next();
//     },
//     (req, res, next) => {
//       //res.send("This is from Response 2");
//       next();
//     },
//     // (req,res) =>{
//     //     res.send("this is response from last one")
//     // }
//   );



//why we are using next() ==> Middle ware

//nested route handle 

//Middle ware ==> we can call the route handlers that can be kept in middle ==> Middle wares 



//3.1 


// app.use("/",(req,res,next)=> {
//     //res.send("Hanlding / Route")
//     next()
// })

// app.get("/user",(req,res,next)=> {
//     next()
// },(req,res,next)=>{
//     res.send("@nd Route handler")

// }
// )

//4.1 

// app.get("/admin/getAllUserData",(req,res)=>{
//     res.send("All Data Sent")
// })

//4.2 

// app.get("/admin/getAllUserData",(req,res)=>{
//     res.send("All Data Sent")
// })

// app.get("/admin/deleteUser",(req,res)=>{
//     res.send("delete user")
// })

//4.3

// app.get("/admin/getAllUserData",(req,res)=>{

//     //check if the request is authorized 

//     const token ="ASHEJLSAL"
//     const isAdminAuthorized= token==="ASHEJL"
//     if (isAdminAuthorized){
//         res.send("All Data Sent")
//     }
//     else {
//         res.status(401).send("Unaurthorized")
//     }
// })

// app.get("/admin/deleteUser",(req,res)=>{
//       const token ="ASHEJLSAL"
//     const isAdminAuthorized= token==="ASHELSAL"
//     if (isAdminAuthorized){

//         res.send("delete user")
//     }
//     else {
//         res.status(401).send("Unauthorized")
//     }
// })


//4.4  middle wares 

// app.use("/admin",(req,res,next)=>{
//     const token ="ASHEJLSA"
//     const isAdminAuthorized= token==="ASHEJLSAL" 

//     if (!isAdminAuthorized){
//         res.status(401).send("unAuthorized Reuqest")
//     }
//     else {
//         next()
//     }


// })

// app.get("/admin/getAllData",(req,res)=>{
//     res.send("All data sent")
// })
// app.get("/admin/deleteUser",(req,res)=>{
//     res.send("Delted user")

// })

app.post("/signup",async (req,res)=>{

  const user= new User({
    firstName:"HRA SOLUTIONS",
    lastName:"Softwareemployee",
    emailId:"google@gmail.com",
    password:"Qwerty@456",
    age:10
  })

  await  user.save();
//creating   a new instance  of the User Model;
 // const user= new User(userObj);
 res.send("User added Succesfully")


})



connectDB()
  .then(() => {
    console.log("Database Connection is established");
    app.listen(7777, () => {
      console.log("Server is Succesfully listening on port 7777");
    });
    
  })
  .catch((err) => {
    console.log("Database Connection not established");
  });


  console.log("new change")

