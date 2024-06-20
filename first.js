
const express = require('express');

const app = express();


const logRequests = (req, res, next) => {
    
    console.log(`${req.method} ${req.url}`);
    

    next();
};


app.use(logRequests);


app.get('/', (req, res) => {
    res.send('Welcome to the online store!');
});

app.get('/products', (req, res) => {
    res.send('List of products');
});


app.post('/checkout', (req, res) => {
    res.send('Checkout process');
});


app.listen(3002, () => {
    console.log('Server is running');
});
