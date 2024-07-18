const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { 
    res.send('Helo world!');
});

app.listen(port, () => {
    console.log('Server runing at http://localhost: ${port}/');
});

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));