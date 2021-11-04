const debug = require("debug")("thing:errors");

const notFoundErrorHandler = (req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
};

const generalErrorHandler = (error, req, res, next) => {
  debug("Ha ocurrido un error: ", error.message);
  const message = error.code ? error.message : "This is a general mistake";
  res.status(error.code || 500).json({ error: message });
};
