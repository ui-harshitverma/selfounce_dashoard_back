const ProductGrid = require("./../models/productGrid")

const getPoductGridController = async (req, res) => {
	try {
	  const gridData = await ProductGrid.find();
	//   console.log(gridData)
	  if (gridData) {
		res.json({
		  status: "success",
		  data: {
			gridData,
		  },
		});
	  } else {
		res.json({
		  status: "fail",
		  message: "product data in not available",
		});
	  }
	} catch (error) {
	  res.status(404).json({
		status: "fail",
		message: error,
	  });
	}
  };

  module.exports = {
	getPoductGridController
  };
  