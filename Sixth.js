const express = require('express');
const app = express();


let isMaintenanceMode = false;


const maintenanceMode = (req, res, next) => {
    if (isMaintenanceMode) {
        res.status(503).send('Service Unavailable - We are currently undergoing maintenance. Please try again later.');
    } else {
        next();
    }
};

app.use(maintenanceMode);


app.post('/toggle-maintenance', (req, res) => {
    isMaintenanceMode = !isMaintenanceMode;
    res.send(`Maintenance mode is now ${isMaintenanceMode ? 'ON' : 'OFF'}`);
});


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