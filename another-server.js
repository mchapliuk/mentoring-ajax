/**
 * @file One more server for showing same domain requests examples
 */

// Import dependencies
const express = require('express'); // a minimal and flexible Node.js web application framework
// Init the app
const app = express();

const PORT = 9999;

// API middleware
app.use((req, res, next) => {
    console.info('Request received for %s', req.url);
    next();
});

// API
app.get('/hello1', (req, res) => {
    res.status(200).send({
        "message": "Hello1"
    });
});

app.get('/hello2', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.status(200).send({
        "message": "Hello from another domain"
    });
});

// Start our server
app.listen(PORT, () => {
    console.info('App listening on port %s', PORT);
});
