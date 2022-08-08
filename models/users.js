const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	dni: {
		type: String
	},
	name: {
		type: String
	},
	secondName: {
		type: String
	},
	age: {
		type: Number
	}
},
	{
		timestamps: true,
		versionKey: false
	})

module.exports = mongoose.model('people', UserSchema)  