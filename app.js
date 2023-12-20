// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configure EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., stylesheets, images)
app.use(express.static(__dirname + '/public'));

// Define a route to render the login form
app.get('/login11', (req, res) => {
    res.render('login11');
});

// Handle login form submission
app.post('/login11', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Perform authentication here (e.g., check against a database)
    // For simplicity, we'll use hardcoded values for demo purposes
    if (username === 'admin' && password === 'password') {
        res.send('Login successful!');
    } else {
        res.send('Login failed. Please check your credentials.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
