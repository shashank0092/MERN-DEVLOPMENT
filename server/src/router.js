var express= require('express')
var router=express.Router();
var RegisterModel=require('./Model')
var bcrypt=require('bcryptjs')



var bodyParser = require('body-parser')


router.use(bodyParser.urlencoded({ extended: false }))


router.use(bodyParser.json())




router.post('/register',async(req,res)=>{

     var {name,age,email,dob,address,mobNo,gender,about,password}=req.body;

     if(!name||!age||!email||!dob||!address||!mobNo||!gender||!about||!password){
          res.send({message:'Please Fill All Deatails',status:'201'})
     }
     else{

          
          try{
               
              
               var {name,age,email,dob,address,mobNo,gender,about,password}=req.body;

               var ValidateEmail=await RegisterModel.findOne({email:email});
          
               if(!ValidateEmail){
               var newUser=RegisterModel({
                    name,age,email,dob,address,mobNo,gender,about,password
               })

               var data=await newUser.save();
               res.send({message:"Register Sucessfully",status:200});
          }
          else{
               res.send({message:'This email Already Exists',status:201});
          }
          }
         
               catch(err){
               res.json(err);
               console.log(err)
          }
     }
     
})


router.post('/login',async(req,res)=>{
     var {email,password} = req.body;

     if(!email||!password){
          res.send({message:'Please Fill All Deatails',status:201});
     }
     else{
          try{
               var user=await RegisterModel.findOne({email:email});
              
               if(user){
                    var isMatch=await bcrypt.compare(password,user.password);
                    
                    if(isMatch){
                         res.send({message:'Login SuccessFully',data:user,status:200});
                    }
                    else{
                         res.send({message:'User Does Not Exist',status:201});
                    }
               }
               else{
                    res.send({message:'User Does not exist',status:201})
               }
          }
          catch(err){
               console.log(err);
          }
     }

})


module.exports=router;