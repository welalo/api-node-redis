require('dotenv').config();
const {connectMongo} = require('./services/dbConnnector')
const express = require('express');
const routes = require('./routes')

const app =  express();

app.use(express.json());

connectMongo()

//Routes
app.use('/api',routes)

app.get('/', (req, res) => {
    res.status(200).json({Message: 'Hello World'})
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => 
    console.log(`Running on port ${PORT}`)
)

