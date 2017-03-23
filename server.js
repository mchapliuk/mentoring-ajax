/**
 * @file A simple nodejs server for AJAX testing purposes
 * @author Maksym Chapliuk
 */

// Import dependencies
const express = require('express'); // a minimal and flexible Node.js web application framework
const bodyParser = require('body-parser');
const fs = require('fs'); // NodeJS File System API

// Demo data
const getDemo = require('./demo-data/get-demo.json');
const customers = require('./demo-data/customers.json');

// Init the app
const app = express();

const PORT = 8888;

// API middleware
app.use((req, res, next) => {
    console.info('Request received for %s', req.url);
    next();
});

app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));
app.set('view engine', 'pug');

// Simple API for testing purposes

/**
 * Start page
 */
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

/**
 * An endpoint for AJAX POST call
 */
app.post('/ajax_form', (req, res) => {
    console.log(req.body);
    const nickname = req.body.nickname;
    const email = req.body.email;

    res.send();
});

/**
 * GET example
 */
app.get('/get_demo', (req, res) => {
    setTimeout(() => {
        res.send(getDemo);
    }, 2000);
});

/**
 * GET Customers
 */
app.get('/customers', (req, res) => {
    let TIMEOUT = Math.random() >= 0.3 ? 1000 : 7000;
    setTimeout(() => {
        res.send(customers);
    }, TIMEOUT)
});

/**
 * ADD Customer
 */
app.post('/customers', (req, res) => {
    console.log(req.body);
    let TIMEOUT = Math.random() >= 0.3 ? 1000 : 20000;
    setTimeout(() => {
        customers.push(req.body);
        res.send(JSON.stringify({"status": "Customer added"}));
    }, TIMEOUT)
});

/**
 * JSONP example
 */
app.get('/jsonp_example', (req, res) => {
    res.jsonp({
        message: "JSONP Works!"
    })
});

/**
 * PROMISED XHR
 */
app.get('/promise_example', (req, res) => {
   setTimeout(() => {
       res.json({
           message: 'ASYNC response'
       });
   }, 3000)
});

/**
 * FETCH example
 */
app.get('/fetch_example', (req, res) => {
    setTimeout(() => {
        res.send(`One of the worst kept secrets about AJAX
         on the web is that the underlying API for it, XMLHttpRequest, wasn't really made for what we've been
          using it for.  We've done well to create elegant APIs around XHR but we know we can do better.  
          Our effort to do better is the fetch API.  Let's have a basic look at the new window.fetch method, 
          available now in Firefox and Chrome Canary.`);
    }, 3000);
});

// Start our server
app.listen(PORT, () => {
    console.info('App listening on port %s', PORT);
});

