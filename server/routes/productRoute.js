const express = require("express");
const router = express.Router()
const fs = require("fs");
const { v4: uuidv4} = require('uuid');
const path = require('path');

const productsFile = path.join(__dirname, '../data/makeup.json');

function listProducts() {
    return JSON.parse(fs.readFileSync('./data/makeup.json', 'utf-8'));
}

function getProductById(id) {
    const allProducts = listProducts();
    let filteredProducts = allProducts.find(item => item.id === id);
    return filteredProducts;
}

function addProduct(body) {
    const allProducts = listProducts();
    const all = new allProduct(body.brand, body.name, body.price, body.currency, body.image, body.description, body.category, body.product_type);
    allProducts.push(all)

    fs.writeFileSync(productsFile, JSON.stringify(allProducts));
    return all;
}

function allProduct(brand, name, price, currency, image, description, category, product_type) {
    this.id = uuidv4();
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.image = image;
    this.description = description;
    this.category = category;
    this.product_type = product_type;
}

router.get("/", (req, res) => {
    const allProducts = listProducts();
    res.status(200).json(allProducts);
})

router.get('/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/makeup.json', 'utf-8',(err, data) => {
        if(err) {
            console.log(err);
            res.json({message: 'error getting product id data'});
        }
        const allProductsData = JSON.parse(data);
        const foundProducts = allProductsData.find((data) => data.id == req.params.id);
        if(!foundProducts) {
            res.json({message: 'error getting data'});
        } else {
            res.json(foundProducts);
        }
    });
})

module.exports = router;