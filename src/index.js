require('./models/User');

const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const authRouters = require('./routes/authRoutes');


const app = express();

app.use(bodyParse.json());
app.use(authRouters);

const mongoUri = 'mongodb+srv://admin:passwordpassword@cluster0-ywczm.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance');
});

mongoose.connection.on('error', (err) => {
    console.error('Error connect to mongo', err); 
})

app.get('/', (req, res) => {
     res.send('Hi there!');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});