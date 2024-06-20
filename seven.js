const express = require('express');
const app = express();


const logClientIP = (req, res, next) => {
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(`Client IP: ${clientIP}`);
    next();
};


app.use(logClientIP);


app.get('/', (req, res) => {
    res.send('Welcome to the online store!');
});

app.post('/purchase', (req, res) => {
    res.send('Purchase made!');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});