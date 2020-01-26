const inquirer = require("inquirer");
const chalk = require("chalk");
const calculations = require("../caculations");
const data = require("../data/planetaryData.json");

const handlePhaseAngle = () => {
  const list = [];
  data.objects.forEach(object => list.push(Object.keys(object)[0]));
  inquirer
    .prompt([
      {
        type: "input",
        name: "distance",
        message: "Enter the distance between the two vehicles"
      },
      {
        type: "list",
        name: "object",
        message: "Select the primary object",
        choices: list
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
      const { distance, object, alitudeActive, altitudePassive } = answers;
      const objectData = data.objects[list.findIndex(name => name === object)];
      const { radius } = objectData[object];
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
