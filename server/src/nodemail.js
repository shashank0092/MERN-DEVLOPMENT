var nodemailer=require('nodemailer');

var UserEmail=(email)=>{
    return email;
}

console.log(UserEmail);

var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'shashank0865@gmail.com',
        pass:"huabwpthxdmvdfgt"
    }
})

var maildata={
    from:"shashank0865@gmail.com",
    to:'shashank0865@gmail.com',
    subject:'This is subject',
    text:'This is tested data that we can not use'
}

var Sendmail= transport.sendMail(maildata,(err,maildata)=>{
    console.log("Sending Data")
    if(err){
        console.log(err);
       
    }
    else{
        console.log('Email Send to'+maildata.to)
    }
})

module.exports ={UserEmail};

module.exports ={Sendmail};
