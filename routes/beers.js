const express = require("express");
const router = express.Router();
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();


  router.get("/beers", (req, res, next)=> {

    punkAPI
  .getBeers()
  .then(  (beerArray) =>res.render("beers.hbs", {beerInfo : beerArray}))

  .catch(error => console.log(error));

  });


  module.exports = router; 