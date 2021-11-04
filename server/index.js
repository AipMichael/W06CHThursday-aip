const chalk = require("chalk");
const debug = require("debug")("pets:server");
const express = require("express");
const morgan = require("morgan");

app.use(morgan("dev"));
/* app.use(express.json());
app.use((req, res, next) => {
  debug("Soy el segundo middleware");
  next();
});
app.use("/pets", petsRoutes);

app.use((req, res, next) => {
  debug("He llegado hasta aquí");
  next();
});
app.use(notFoundErrorHandler);
app.use(generalErrorHandler);
 */
