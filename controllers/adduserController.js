const Adduser = require("../models/adduser");

const adduserController = async (req, res) => {
  try {
    const userData = await Adduser.find();
    if (userData) {
      res.json({
        status: "success",
        data: {
          userData,
        },
      });
    } else {
      res.json({
        status: "fail",
        message: "add user data in not available",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const deleteadduserController = async (req, res) => {
  try {
    const id = req.body._id;
    if (id) {
      const findDoc = await Adduser.deleteOne({ _id: id })
        .then(() => {
          res.json({
            status: "sucess",
            message: "removed doc",
          });
        })
        .catch((err) => {
          res.status(404).json({
            status: "fail",
            message: err,
          });
        });
    } else {
      res.json({
        status: "fail",
        message: "add user data in not available",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const postadduserController = async (req, res) => {
  try {
    await uploadFile(req, res);
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  adduserController,
  deleteadduserController,
  postadduserController,
};
