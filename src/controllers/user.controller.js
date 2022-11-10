const  {httpErrorHandler} = require('./../handlers/httpError.handler')
const {getUsers,createUser} = require('./../services/user.service')

async function getData(req,res){
    try {
        const data =  await getUsers()
        res.status(200).json(data);
    } catch (error) {
        httpErrorHandler(res,500,error.message)
    }
}

async function createData(req,res){
    try {
        const data =  await createUser(req.body)
        res.status(201).json(data);
    } catch (error) {
        httpErrorHandler(res,500,error.message)
    }
}

module.exports = {
    getData,
    createData
}