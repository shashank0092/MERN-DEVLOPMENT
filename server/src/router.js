var express= require('express')
var router=express.Router();
var RegisterModel=require('./Model')
var bcrypt=require('bcryptjs')
var bodyParser = require('body-parser');
// var mailer=require('./nodemail')
var nodemailer=require('nodemailer');



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
               

               if(data){
                    var transport=nodemailer.createTransport({
                         service:'gmail',
                         auth:{
                             user:'shashank0865@gmail.com',
                             pass:"huabwpthxdmvdfgt"
                         }
                     })

                     var maildata={
                         from:"shashank0865@gmail.com",
                         to:`${data.email}`,
                         subject:'This is subject',
                         text:'This is tested data that we can not use'
                     }

                     var Sendmail= transport.sendMail(maildata,(err,maildata)=>{
                         console.log("Sending Data")
                         if(err){
                             res.send({message:'Register But Not Email',status:201});
                            
                         }
                         else{
                              res.send({message:'Regsiter SuccessFully',status:200});
                         }
                     })

                    
                     
               }
                

               
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


router.post('/feedback',async(req,res)=>{
     try{
          var email=req.body.email;
          var feedback=req.body.feedback;

          if(!feedback){
               res.send({message:'Write Feedback',status:201})
          }
          else{
              try{
               var user=await RegisterModel.findOne({email:email});
               
               
              }
              catch(err){
               console.log(err);
              }
               
          }




     }
     catch(err){

     }
})


module.exports=router;