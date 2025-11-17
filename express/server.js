const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to Student Portal');
});

app.get('/about', (req, res) => {
    res.send('This is an About Section');
});

app.get('/contact', (req, res) => {
    res.send('Name: Prathamesh Shinde<br>Email: prathameshshinde2002@gmail.com');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});


// npm init -y       # Initialize a Node.js project
// npm install express
// node server.js