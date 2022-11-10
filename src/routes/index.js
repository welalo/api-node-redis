const fs = require('fs');
const {Router} = require('express');

const routes = Router();

fs.readdir(__dirname, (error, files) => {
    if(error){
        throw new Error('ERROR_READING_DIR_ROUTES')
    }
    else{
        for(const file of files){
            if(file != 'index.js'){
                routes.use(`/${file.split('.').shift()}`, require(`./${file}`))
            }
        }
    }
})

module.exports = routes;
