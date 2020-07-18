/*-----------------------------------------------------------
 * Project........: StoreApp
 * Descriotion....: StoreApp project on nodejs with mongodb
 * Author.........: Ronaldo Torre
 *-----------------------------------------------------------
 * Controller.....: /
 * ---------------------------------------------------------*/

const express = require("express");
const controller = express.Router();

controller.get("/", function (req, res, next) {
  res.status(200).send({
    title: "Storeapp.API",
    author: "Ronaldo Torre",
    version: "1.0.0",
  });
});

module.exports = controller;
