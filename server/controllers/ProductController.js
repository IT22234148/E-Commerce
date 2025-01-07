const Product = require("../models/ProductModel");

const getAllProducts = async(req, res, next)=>{
    let products;

    try{
        products = await Product.find();
    }catch(err){
        console.log(err);
    }

    if(!products){
        return res.status(404).json({message:"Products not available"});
    }

    return res.status(200).json({products});
};

const addProduct = async(req, res, next)=>{
    const {name, price, photo, stock, year, des} = req.body;

    let product;

    try{
        product = new Product({name, price, photo, stock, year, des});
        await product.save();
    }catch(err){
        console.log(err);
    }

    if(!product){
        return res.status(404).json({message:"Add Product not available"});
    }

    return res.status(200).json({product});
};

const getProductById = async(req, res, next)=>{
    const id = req.params.id;
    let product;

    try{
        product = await Product.findById(id);
    }catch(err){
        console.log(err);
    }

    if(!product){
        return res.status(404).json({message:"Id Product not available"});
    }

    return res.status(200).json({product});
};

const UpdateProduct = async(req, res, next)=>{
    const id = req.params.id;
    const{name, price, photo, stock, year, des}=req.body;
    let product;

    try{
        product = await Product.findByIdAndUpdate(id, {name:name, price:price, photo:photo, stock:stock, year:year, des:des});
        product = await product.save();
    }catch(err){
        console.log(err);
    }

    if(!product){
        return res.status(404).json({message:"Product not update"});
    }

    return res.status(200).json({message:"Update succusessfull"});
};

const deleteProduct = async(req,res,next)=>{
    const id = req.params.id;
    let product;

    try{
        product = await Product.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }

    if(!product){
        return res.status(404).json({message:"Product not Delete"});
    }

    return res.status(200).json({message:"Delete succusessfull"});
};

exports.getAllProducts=getAllProducts;
exports.addProduct=addProduct;
exports.getProductById=getProductById;
exports.UpdateProduct=UpdateProduct;
exports.deleteProduct=deleteProduct;