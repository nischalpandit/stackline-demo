const express = require('express');
const path = require('path');
const data = require('./webdevData.json');

const app = express();

//Serve static files from React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/salesData', (req, res) => {
    // Delay is for mimicing actual real world api call
    setTimeout(function () {
        return res.json(data);
    }, 2500);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port);

console.log(`Listening to port ${port}`);
