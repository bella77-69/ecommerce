const express = require("express");
const cors = require('cors');
const app = express();
PORT = 8080;

const productRoute = require('./routes/productRoute');
const blushRoute = require('./routes/blushRoute');
require ('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//route
app.use('/products', productRoute);
app.use('/products/blush', blushRoute);

//home route
app.get('/', (req, res) => {
    res.json({message: 'Hello, welcom to the products api',
routes: [
    {
        method: 'get',
        endpoint: '/products',
    },
    {
        method: 'get',
        endpoint: '/products/:id',
    },
    {
      method: 'get',
      endpoint: '/products/blush',
  },
  {
      method: 'get',
      endpoint: '/products/blush/:id',
  },
]


})
})


app.listen(8080, () => {
    console.log("listening on port 8080...");
  });
// var express = require("express");
// var app = express();
// var bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("client/build"));
// // app.use(require(".controllers/index"));
// var ObjectId = require("mongodb").ObjectId;

// var MongoClient = require("mongodb").MongoClient;
// MongoClient.connect("mongodb://localhost:27017/products", function(err, client){
//   if(err){
//     return console.log(err);
//   }
//   db = client.db("products");
//   console.log("Connected to DB");

//   app.listen(3000, function () {
//     console.log("App running on port " + this.address().port);
//   });
// });

// app.get('/', function(req, res){
//   res.sendFile(__dirname + "../data/makeup.json");
// });

// app.get("/products", function(req, res){
//   db.collection("products").find().toArray(function(err, results){
// 	  if(err){
// 		return console.log(err);
// 	  }
// 	  res.json(results);
// 	});
// });

// app.get("/products/_id", function(req, res){
//   // req.body._id = new ObjectId(req.body._id);
//     db.collection("products").find({ "_id": ObjectId("5a32aa64b40895f916cece55") }).toArray(function(err, results){
//     res.json(results);
//   });
// });


// app.get("/products/catergory", function(req, res){
//   db.collection("products").find().toArray(function(err, results){
//     if(err){
//       return console.log(err);
//     }
//     res.json(results);
//   });
// });