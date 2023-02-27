const mongoose = require('mongoose');

const productGridSchema = new mongoose.Schema({
	product_img : {
		type: String,
		require: true
	},
	product_name: {
		type: String,
		require:true,
		unique: true
	},
	category: {
		type: String,
		require:true,
	},
	price: {
		type: String,
		require:true,
	},
	stock: {
		type: Number,
		require:true,
	},
	status: {
		type: String,
		require:true,
	},
	key:{
		type: Number,
	}
});

const ProductGrid = mongoose.model('ProductGrid', productGridSchema);

module.exports = ProductGrid;