const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')

const getUsers = async (req, res) => {
    try {
        const listAll = await userModel.find()
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getUser = async (req, res) => {
    const { id } = req.params
    try {
        const userSelect = await userModel.findById({
            _id: id
        })
        if (!userSelect) {
            res.send({ error: 'No hay una persona registrada con ese id' })
        } else {
            res.send({ data: userSelect })
        }
    } catch (e) {
        httpError(res, e)
    }
}

const createUsers = async (req, res) => {
    try {
        const { dni, name, secondName, age } = req.body
        const resDetail = await userModel.create({
            dni, name, secondName, age
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}

const updateUsers = async (req, res) => {
    try {
        const { id } = req.params;
        const { dni, name, secondName, age } = req.body
        const userSelect = await userModel.updateOne({
            _id: id
        }, { $set: { dni, name, secondName, age } }, { upsert: true })
        res.send({ data: userSelect })
        if (userSelect.upsertedCount > 0) {
            console.log(`No se ah encontrado a la persona con el id ${id}
        por lo que se la ah añadido con el id: ${userSelect.upsertedId}`)
        } else {
            console.log(`${id} ah sido modificado`);
        }
    } catch (e) {
        httpError(res, e)
        console.log(e)
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { id } = req.params
        const userDeleted = await userModel.deleteOne({
            _id: id
        })
        res.send({ data: userDeleted })
    } catch (e) {
        httpError(res, e)
    }
}

module.exports = { getUsers, getUser, createUsers, updateUsers, deleteUsers }