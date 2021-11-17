const path = require('path');
const express = require('express');
const getPriceData = require('./get-prices-service')
const app = express();

app.get('/', async (req, res) => {
    
    const data = await getPriceData();
    res.send(data)
});

app.listen(3000);
console.log("The server is listening on port 3000...")
