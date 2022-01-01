const express = require("express");
const cors = require('cors');
const app = express();
PORT = 8080;

const productRoute = require('./routes/productRoute');

require ('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

//route
app.use('/products', productRoute);

//home route
app.get('/products', (req, res) => {
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
]

})
})


app.listen(8080, () => {
    console.log("listening on port 8080...");
  });