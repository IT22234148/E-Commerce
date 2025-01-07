const express = require("express");
const productrouter = express.Router();
const Product = require("../models/ProductModel");
const ProductController = require("../controllers/ProductController");

productrouter.get("/", ProductController.getAllProducts);
productrouter.post("/", ProductController.addProduct);
productrouter.get("/:id", ProductController.getProductById);
productrouter.put("/:id", ProductController.UpdateProduct);
productrouter.delete("/:id", ProductController.deleteProduct);

module.exports=productrouter;