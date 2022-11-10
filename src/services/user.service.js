const User = require('./../models/user.model');

async function getUsers(){
    try {
        const data = await User.find({})
        return data;
    } catch (error) {
        throw new Error('ERROR_GET_USERS_MONGO')
    }
}

async function createUser(body){
    try {
        const data = await User.create(body)
    } catch (error) {
        throw new Error(error.message)
    }
}


module.exports ={
    getUsers,
    createUser
}