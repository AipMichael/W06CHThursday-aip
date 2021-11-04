const chalk = require("chalk");
const debug = require("debug")("things:server");
const express = require("express");
const morgan = require("morgan");
const { notFoundErrorHandler, generalErrorHandler } = require("./error");
const thingsRoutes = require("./routes/thingsRoutes");

const app = express();

const initializeServer = (port) => {
  const server = app.listen(port, () => {
    debug(chalk.blue(`Escuchando en el puerto ${port}`));
  });

  server.on("error", (error) => {
    debug(chalk.red("Hola! Hay un error al iniciar el servidor."));
    if (error.code === "EADDRINUSE") {
      debug(chalk.blue(`El puerto ${port} está ocupado.`));
    }
  });
};

app.use(morgan("dev"));

app.use(express.json());

app.use("/things", thingsRoutes);

app.use(notFoundErrorHandler);
app.use(generalErrorHandler);

module.exports = initializeServer;
