import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";
const productRouter = express.Router();
productRouter.get('/', expressAsyncHandler(async (req, res)=> {
    const products = await Product.find({});
    res.send(products);
})
);
productRouter.get('/seed', expressAsyncHandler(async(req,res)=>{
    //await Product.remove({}); this code will remove all products
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
})
) ;
productRouter.get('/:id', expressAsyncHandler(async(req,res)=> {
    const product = Product.findById(req.params.id);
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send('Product Not Found');
    }
})
);
export default productRouter;