const inquirer = require("inquirer");
const chalk = require("chalk");

const calculations = require("../caculations");

const handleRocketEquation = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "isp",
        message: "Enter the isp of the stage"
      },
      {
        type: "input",
        name: "mStart",
        message: "Enter the starting mass of the stage"
      },
      {
        type: "input",
        name: "mEnd",
        message: "Enter the final mass of the stage"
      }
    ])
    .then(answers => {
      const { isp, mStart, mEnd } = answers;
      console.log(
        `Total deltaV is ${chalk.black.bgRed(
          Number.toFloat(
            calculations.rocketEquation(isp, mStart, mEnd)
          ).toFixed(2)
        )} m/s`
      );
    });
};

module.exports = handleRocketEquation;
