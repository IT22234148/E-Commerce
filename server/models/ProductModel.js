const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    photo:{
        type:String,
        require:true,
    },
    stock:{
        type:Number,
        require:true,
    },
    year:{
        type:Number,
        require:true,
    },
    des:{
        type:String,
        require:true,
    }
});

module.exports = mongoose.model("ProductModel", productSchema)