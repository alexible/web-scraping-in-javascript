const path = require('path');
const express = require('express');
const getPriceData = require('./get-prices-service')
const app = express();

app.get('/api/prices', async (req, res) => {
    
    const data = await getPriceData();
    res.send(data)
});

app.get('/', async (req, res) => {
    
    const html = []
    html.push("<h3>API Links</h3>");
    html.push("<ul>");
    html.push("<li>");
    html.push("<a href='/api/prices'>");
    html.push('get diesel prices');
    html.push("</a>")
    html.push("</li>");
    html.push("</ul>");
    res.send(html.join('\n'))
});




// app.listen(3000);
// console.log("The server is listening on port 3000...")

module.exports = app;