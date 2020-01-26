const inquirer = require("inquirer");
const chalk = require("chalk");
const calculations = require("../caculations");
const data = require("../data/planetaryData.json");

const handleOrbitalVelocity = () => {
  const list = [];
  data.objects.forEach(object => list.push(Object.keys(object)[0]));
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
        name: "alitude",
        message:
          "What is the alitude of the orbit (in meters) you would like to calculate the speed of?"
      }
    ])
    .then(answers => {
      const { object, alitude } = answers;
      const objectData = data.objects[list.findIndex(name => name === object)];
      const { radius, mass } = objectData[object];
      console.log(
        `Orbital velocity at altitude ${chalk.red(
          `${alitude}m`
        )} will be ${chalk.black.bgRed(
          calculations.orbitalVelocity(parseInt(alitude), mass, radius)
        )}m/s`
      );
    });
};

module.exports = handleOrbitalVelocity;
