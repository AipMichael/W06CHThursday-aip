const chalk = require("chalk");
const mongoose = require("mongoose");
const debug = require("debug")("things:database");

const produceThings = process.env.MONGODB_PRODUCTION;
const testThings = process.env.MONGODB_DEVELOPMENT;

const dataBase = (dataBaseString) => {
  mongoose.connect(
    dataBaseString === "testThings" ? testThings : produceThings,
    (error) => {
      if (dataBaseString === produceThings) {
        debug(chalk.green("Conectado a la base de datos de Producción"));
      } else if (dataBaseString === testThings) {
        debug(chalk.green("Conectado a la base de datos de Pruebas"));
      }
      if (error) {
        debug(chalk.red("No se ha podido iniciar la base de datos."));
        debug(chalk.red(error.message));
      }
      debug(chalk.blue("Conectado a la base de datos"));
    }
  );
};
