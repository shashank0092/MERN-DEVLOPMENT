const mongoose=require('mongoose');


const connect =async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/MERN-DEV')
        console.log('Connected To Data Base')
    }
    catch(err){
        console.log(err);
    }
}

connect();

module.exports = connect;