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
        name: "periapsis",
        message: "What is the alitude of the periapsis (in meters)?"
      },
      {
        type: "input",
        name: "apoapsis",
        message: "What is the alitude of the apoapsis (in meters)?"
      }
    ])
    .then(answers => {
      const { mass, radius, periapsis, apoapsis } = answers;
      console.log(
        `Orbital period at of orbit with a semi-major axis of ${chalk.red(
          `${(periapsis + radius + (apoapsis + radius)) / 2}m`
        )} will be ${chalk.black.bgRed(
          calculations.orbitalPeriod(
            parseInt(periapsis),
            parseInt(apoapsis),
            mass,
            radius
          )
        )} minutes`
      );
    });
};

module.exports = handleOrbitalPeriod;
