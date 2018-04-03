const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'Hi diddle do!'
    });
});

module.exports = app;
