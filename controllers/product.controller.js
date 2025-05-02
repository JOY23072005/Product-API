const Product = require("../models/product.model.js");

const getProducts = async (req,res)=>{
        try{
            const products = await Product.find({});
            res.status(200).json(products);
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }
const getProduct = async (req,res)=>{
    try{
        console.log(req.params.id);
        const product=await Product.find({_id:req.params.id})
        res.send(product);
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
const pushProduct =  async (req, res)=>{
        try{
            const product = await Product.create(req.body);
            res.status(200).json(product);
        }catch(err){
            res.status(500).json({message: err.message})
        }
    }
const updateProduct = async (req,res)=>{
        try{
            const {id} = req.params;
            await Product.findByIdAndUpdate(id, req.body);
            if(!Product){
                return res.status(404).json({message:"Product no found"});
            }
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        }catch(err){
            res.status(500).json({message : err.message})
        }
    }
const deleteProduct = async (req,res)=>{
        try{
            const {id}= req.params;
    
            const product = await Product.findByIdAndDelete(id);
            if(!product){
                return res.status(404).json({message:"Product not found"});
            } 
            res.status(200).json({message : "Product Updated Succesfully!"});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
module.exports = {
    getProducts,
    getProduct,
    pushProduct,
    updateProduct,
    deleteProduct
};