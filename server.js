/**
 * @file A simple nodejs server for AJAX testing purposes
 * @author Maksym Chapliuk
 */

// Import dependencies
const express = require('express'); // a minimal and flexible Node.js web application framework
const fs = require('fs'); // NodeJS File System API


// Init the app
const app = express();

const PORT = 8888;

// API middleware
app.use((req, res, next) => {
    console.info('Request received for %s', req.url);
    next();
});

app.use(express.static(__dirname + '/src'));
app.set('view engine', 'pug');

// Simple API for testing purposes
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/form_action', (req, res) => {
    console.log(req.query);

    res.render('01-result', { message: JSON.stringify(req.query) });
});


app.get('/', (req, res) => {

});

app.get('/', (req, res) => {

});

// Start our server
app.listen(PORT, () => {
    console.info('App listening on port %s', PORT);
});

