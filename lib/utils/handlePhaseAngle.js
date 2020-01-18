const inquirer = require("inquirer");
const chalk = require("chalk");
const calculations = require("../caculations");

const handlePhaseAngle = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "distance",
        message: "Enter the distance between the two vehicles"
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
        name: "alitudeActive",
        message:
          "What is the alitude of the orbit (in meters) of the active vehicle?"
      },
      {
        type: "input",
        name: "altitudePassive",
        message:
          "What is the alitude of the orbit (in meters) of the passive vehicle?"
      }
    ])
    .then(answers => {
      const { distance, radius, alitudeActive, altitudePassive } = answers;
      console.log(
        `Phase angle is${chalk.black.bgRed(
          calculations.phaseAngle(
            parseInt(distance),
            parseInt(alitudeActive),
            parseInt(altitudePassive),
            radius
          )
        )}`
      );
    });
};

module.exports = handlePhaseAngle;
