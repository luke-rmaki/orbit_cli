const program = require("commander");
const inquirer = require("inquirer");

const sortAnswers = require("./utils/sortAnswers");

const cliStart = () => {
  program.version("0.0.1");

  program
    .command("calc")
    .alias("c")
    .description("Presents choice of CLI calculations")
    .action(() => {
      inquirer
        .prompt([
          {
            type: "list",
            name: "calculations",
            message: "What do you want to caculate?",
            choices: [
              "Vis Viva Equation",
              "Total orbital energy",
              "Velocity at a specific orbit"
            ]
          }
        ])
        .then(answer => {
          sortAnswers(answer);
        });
    });
  program.parse(process.argv);
};

module.exports = cliStart;
