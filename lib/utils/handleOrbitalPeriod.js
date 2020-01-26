const inquirer = require("inquirer");
const chalk = require("chalk");
const calculations = require("../caculations");
const data = require("../data/planetaryData.json");

const handleOrbitalPeriod = () => {
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
      const { object, periapsis, apoapsis } = answers;
      const objectData = data.objects[list.findIndex(name => name === object)];
      const { radius, mass } = objectData[object];
      console.log(
        `Orbital period at an orbit around ${object} with a semi-major axis of ${chalk.red(
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
