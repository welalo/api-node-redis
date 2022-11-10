const mongoose = require('mongoose');

const connectMongo = async () => {

    try {
        await mongoose.connect(process.env.MONGOURL, {
            serverSelectionTimeoutMS: 3000
        })
        console.log('Conectado a mongodb')
    } catch (error) {
        throw new Error('FAILED_CONNECT_MONGO')
    }
}


module.exports = {
    connectMongo
}