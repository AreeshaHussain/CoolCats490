const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log('MongoDB database connection established successfully.')
});


// This is to tell server where our users and activities are saved
const activityRouter = require('./routes/activities');
const userRouter = require('./routes/users');

// Every time user enters /users to the brower, it will show the users list
app.use('/activities', activityRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log('Server is running on port: %f', port);
});