const express = require('express')
const router = express.Router()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExt = removeExtension(file)
    const skip = ['index'].includes(fileWithoutExt)
    if(!skip){
        router.use(`/${fileWithoutExt}`, require(`./${fileWithoutExt}`))
    }
})

router.get('*', (res, req) => {
    res.status(404)
    res.send({eror: 'Not Found'})
})

module.exports = router