const inquirer = require("inquirer");
const chalk = require("chalk");
const calculations = require("../caculations");
const data = require("../data/planetaryData.json");

const handleVisViva = () => {
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
      const { object, altitude1, altitude2 } = answers;
      const objectData = data.objects[list.findIndex(name => name === object)];
      const { radius, mass } = objectData[object];
      const { deltaVOne, deltaVTwo } = calculations.visViva(
        Number.parseFloat(mass),
        parseInt(radius),
        parseInt(altitude1),
        parseInt(altitude2)
      );
      // Use chalk to provide coloring for response
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
