
const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());


const validateUserInput = (req, res, next) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    
    next();
};


const registerUser = (req, res) => {
    const { email } = req.body;

    
    const newUser = { id: Date.now(), email };

    
    res.status(201).json({ message: 'User registered successfully', user: newUser });
};


app.post('/register', validateUserInput, registerUser);


app.listen(3002, () => {
    console.log('Server is running on port 3000');
});
