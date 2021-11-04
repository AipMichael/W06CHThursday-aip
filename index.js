require("dotenv").config();
const inquirer = require("inquirer");
require("./database/index");

const initializeServer = require("./server/index");

let port = process.env.SERVER_PORT || 5000;

(async () => {
  const answers = await inquirer.prompt([
    {
      name: "apis",
      type: "input",
      message: "¿En qué puerto quieres que se inicie la API?",
      default: 4060,
    },
    {
      name: "db",
      type: "list",
      message: "¿Qué base de datos quieres usar?",
      choices: [
        {
          name: "Pruebas",
          value: "testThings",
        },
        {
          name: "Producción",
          value: "produceThings",
        },
      ],
      default: "test-things",
    },
    {
      name: "edit",
      type: "confirm",
      message:
        "¿Quieres permitir que los clientes puedan crear, borrar y modificar?",
      default: false,
    },
  ]);
  console.log(answers);
  port = +answers.apis;

  database(answers.db);
  initializeServer(port);
})();
