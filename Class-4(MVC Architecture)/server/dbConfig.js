const mongoose = require("mongoose");

function connectDB(dbUrl) {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = { connectDB };
