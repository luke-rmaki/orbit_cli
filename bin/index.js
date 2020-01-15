#!/usr/bin/env node
const program = require("commander");
const inquirer = require("inquirer");

const sortAnswers = require("../lib/sortAnswers");

const main = () => {
  program.version("0.0.1");

  program
    .command("calc") // command full name
    .alias("c") // command short name
    .description("Presents choice of CLI calculations")
    // action to run when command is entered
    .action(() => {
      // inquirer is used to present a multiple choice to user
      inquirer
        .prompt([
          {
            type: "list",
            name: "calculations",
            message: "What do you want to caculate?",
            choices: [
              "Rocket Equation",
              "Vis Viva Equation",
              "Velocity at a specific orbit",
              "Orbital period"
            ]
          }
        ])
        .then(answer => {
          sortAnswers(answer);
        });
    });
  program.parse(process.argv);
};

main();
