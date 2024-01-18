require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hi from the backend!'
    })
});

app.get('/blogs', async (req, res) => {
    const blogs = await Blog.find({});

    res.send({
        blogs: blogs
    })
})

// Listen to PORT
mongoose.connect(process.env.MONGODB_URI).then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log('listening on port' + " " + process.env.PORT || 5000);
    })
}).catch(error => {
    console.log(error)
});
