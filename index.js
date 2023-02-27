const dotenv = require("dotenv");
dotenv.config()
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose")
const fs = require('fs');
const PORT = process.env.PORT || 8000
const adduserRoute = require('./routers/adduserRoute');
const morgan = require("morgan");
const Adduser = require("./models/adduser");
const DB_CONNECTION = process.env.DB_CONNECTION
// const ProductGrid = require("./models/productGrid")



app.use(express.json());
app.use(cors())
app.use(morgan('dev'))

app.use('/', adduserRoute);


// const filedata = JSON.parse(fs.readFileSync(`${__dirname}/apidata/adduser.json`));
// const data = async () =>{
// 	try {
// 		await filedata;
// 		Adduser.create(filedata);
// 		console.log('done')
		
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
// data()
// const gridData = JSON.parse(fs.readFileSync(`${__dirname}/apidata/productGrid.json`));
// // console.log(gridData)
// const data = async () =>{
// 	try {
// 		await gridData;
// 		ProductGrid.create(gridData);
// 		console.log('done')
		
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
// data()



mongoose.set('strictQuery', false)
mongoose.connect(DB_CONNECTION, () => {
	console.log('DB connected')
})

app.listen(PORT, '127.0.0.1', () => {
	console.log(`app is listening on ${PORT}`)
})
