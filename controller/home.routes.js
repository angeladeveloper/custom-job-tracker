const Estimate = require("../sequelize/models/estimate.model");

const router = require("express").Router();
// const { Estimate} = require('../models');
// const withAuth = require('../utils/auth');

router.get("/", (req, res) => {
  console.log("sent");

  res.send(Estimate);
});


module.exports = router