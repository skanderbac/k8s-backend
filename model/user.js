var  mongoose=require('mongoose');
var Schema =mongoose.Schema;
var User=new Schema({
    FirstName: {
        type:String,
        required:true,
        
    },
    LastName:{
        type:String,
        required:true,
    },
    Phone:{
        type:Number,
    },
    Country: {
        type:String,
    },
    Email: {
        type:String,
        required:true,
    },
    
});
module.exports =mongoose.model('user',User);
