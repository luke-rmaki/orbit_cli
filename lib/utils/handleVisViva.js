const inquirer = require("inquirer");
const chalk = require("chalk");

const calculations = require("../caculations");

const handleVisViva = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mass",
        message:
          "Enter a mass in kg for the primary body or leave blank for Kerbin's mass",
        default: () => 5.2915158 * 10 ** 22
      },
      {
        type: "input",
        name: "radius",
        message:
          "Enter the radius of the primary body in meters or leave blank to use the radius of Kerbin",
        default: () => 600000
      },
      {
        type: "input",
        name: "altitude1",
        message: "Enter an altitude in m at burn one"
      },
      {
        type: "input",
        name: "altitude2",
        message: "Enter an altitude in m at burn two"
      }
    ])
    .then(answers => {
      const { mass, radius, altitude1, altitude2 } = answers;
      const { deltaVOne, deltaVTwo } = calculations.visViva(
        Number.parseFloat(mass),
        parseInt(radius),
        parseInt(altitude1),
        parseInt(altitude2)
      );
      console.log(
        `DeltaV for ${chalk.black.bgRed("burn 1")} will be ${chalk.black.bgRed(
          deltaVOne
        )} m/s. DeltaV for ${chalk.black.bgMagenta(
          "burn 2"
        )} will be ${chalk.black.bgMagenta(deltaVTwo)} m/s.`
      );
    });
};

module.exports = handleVisViva;
