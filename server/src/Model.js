const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const RegistartionSchema=new mongoose.Schema({ 
    name:{
        type: 'string',
        required:true,
        uppercase:true,
    },
    age:{ 
        type: 'number', 
        
    },
    email:{ 
        type:'string',
        required:true,
        unique:true,
    },
    dob:{ 
        type:'date',
    },
    adress:{ 
        type:'string',
    },
    phoneNumber:{ 
        type:'string',
    },
    gender:{ 
        type:'string'
    },
    aboutSelf:{
        type:'string',
    },
    idProof:{ 
        type:'string',
    },
    password:{ 
        type:'string',
        required:true
    },
})


RegistartionSchema.pre("save",async function(next){
    if(this.isModified("password")){
    
        this.password =await bcrypt.hash(this.password,10);
        
    }
    next();
})

const model=new mongoose.model('User',RegistartionSchema);

module.exports=model;