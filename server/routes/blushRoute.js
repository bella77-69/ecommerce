const express = require("express");
const router = express.Router()
const fs = require("fs");
const { v4: uuidv4} = require('uuid');
const path = require('path');

const blushFile = path.join(__dirname, '../data/blush.json');

function listBlush() {
    return JSON.parson(fs.readFileSync('./data/blush.json', 'utf-8'));
}

function getBlushById() {
    const allBlush = listBlush();
    let filteredBlush = allBlush.find(item => item.id === id);
    return filteredBlush;
}

router.get('/products/blush', (req, res) => {
    const allBlush = listBlush();
    res.status(200).json(allBlush);
})

router.get('/products/blush/:id', (req, res) =>  {
    console.log(req.params.id);
    fs.readFile('./data/blush.json','utf-8', (err, data) => {
        if(err) {
            console.log(err);
            res.json({message: 'error getting Blush id data'});
        }
        const allBlushData = JSON.parse(data);
        const foundBlush = allBlushData.find((data) => data.id == req.params.id);
        if(!foundBlush) {
            res.json({message: 'error getting blush data'});
        } else {
            res.json(foundBlush);
        }
    })
})


module.exports = router;