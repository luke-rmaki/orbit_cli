const program = require("commander");
const inquirer = require("inquirer");

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
            name: "caculations",
            message: "What do you want to caculate?",
            choices: [
              "Vis Viva Equation",
              "Total orbital energy",
              "Velocity at a specific orbit"
            ]
          }
        ])
        .then(answer => {
          console.log(answer);
        });
    });
  program.parse(process.argv);
};

module.exports = cliStart;
