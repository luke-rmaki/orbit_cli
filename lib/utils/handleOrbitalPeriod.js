const inquirer = require("inquirer");
const chalk = require("chalk");
const calculations = require("../caculations");

const handleOrbitalPeriod = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "mass",
        message:
          "Enter the mass of the primary body or leave blank to use the mass of Kerbin",
        default: () => 5.2915158 * 10 ** 22
      },
      {
        type: "input",
        name: "radius",
        message:
          "Enter the radius in meters of the primary body in meters or leave blank to use the radius of Kerbin",
        default: () => 600000
      },
      {
        type: "input",
        name: "altitude",
        message:
          "What is the alitude of the orbit (in meters) you would like to calculate the period of?"
      }
    ])
    .then(answers => {
      const { mass, radius, altitude } = answers;
      console.log(
        `Orbital period at altitude ${chalk.red(
          `${altitude}m`
        )} will be ${chalk.black.bgRed(
          calculations.orbitalPeriod(parseInt(altitude), mass, radius)
        )} minutes`
      );
    });
};

module.exports = handleOrbitalPeriod;
