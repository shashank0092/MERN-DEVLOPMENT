const INTIALSTATE="";

const SETUSER=(state=INTIALSTATE,action)=>{

    switch(action.type){
        case "SETDETAILS":
            return action.payload;
        default: 
            return null;
    }

}

export default SETUSER;