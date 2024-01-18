require('dotenv').config();
const express = require('express');
const app = express();

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hi from the backend!'
    })
});

// Listen to PORT
app.listen(process.env.PORT || 5000, () => {
    console.log('listening on port' + " " + process.env.PORT || 5000);
})