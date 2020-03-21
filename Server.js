const express = require('express');
const path = require('path');
const data = require('./webdevData.json');

const app = express();

//Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/products', (req, res) => {
    res.send(data);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Listening to port ${port}`);
