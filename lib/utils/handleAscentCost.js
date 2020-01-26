const inquirer = require("inquirer");
const chalk = require("chalk");
const calculations = require("../caculations");
const data = require("../data/planetaryData.json");

const handleAscentCost = () => {
  const list = [];
  data.objects.forEach(object => list.push(Object.keys(object)[0]));
  // Inquirer prompts user to enter in their values for calculation. Some values have a default value if left blank
  inquirer
    .prompt([
      {
        type: "list",
        name: "object",
        message: "Select the primary object",
        choices: list
      },
      {
        type: "input",
        name: "altitude",
        message: "Enter a desired orbital altitude in m"
      }
    ])
    .then(answers => {
      const { object, altitude } = answers;
      const objectData = data.objects[list.findIndex(name => name === object)];
      const { radius, mass, surfaceRotation } = objectData[object];
      const { launchBurn, circularisationBurn } = calculations.ascentCost(
        mass,
        radius,
        surfaceRotation,
        parseInt(altitude)
      );
      console.log(
        `Ascent to an altitude of ${chalk.red(
          `${altitude}m`
        )} from the surface of ${chalk.red(
          object
        )} will require a launch burn of ${chalk.black.bgRed(
          `${launchBurn}m/s`
        )} and a circularisation burn of ${chalk.black.bgRed(
          `${circularisationBurn}m/s`
        )}.`
      );
    });
};

module.exports = handleAscentCost;
