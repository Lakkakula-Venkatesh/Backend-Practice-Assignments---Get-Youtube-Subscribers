
const express = require('express');
const app = express();
const Subscriber = require('./models/subscribers');
const ObjectId = require("mongoose");


// Your code goes here
app.get('/subscribers', (req, res) => {
    Subscriber.find().then(subscribers => res.send(subscribers));
    return;
});
app.get('/subscribers/names', (req, res) => {
    Subscriber.find().select({name: 1, subscribedChannel: 1}).then(subscribers => res.send(subscribers));
    return;
});
app.get('/subscribers/:id', (req, res) => {
    const id = req.params.id;
    let currentSubscriber = [];
    Subscriber.findById({_id: id}).then(subscribers => res.send(subscribers));
    // console.log(currentSubscriber);
    // res.send(currentSubscriber[0]);
    return;
});

















module.exports = app;
