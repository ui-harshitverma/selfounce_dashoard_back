const mongoose = require('mongoose');

const adduserSchema = new mongoose.Schema({
	img : {
		type: String,
		require: true
	},
	name: {
		type: String,
		require:true,
		unique: true
	},
	date: {
		type: String,
		require:true,
	}
});

const Adduser = mongoose.model('Adduser', adduserSchema);

module.exports = Adduser;