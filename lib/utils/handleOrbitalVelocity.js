const inquirer = require("inquirer");

const calculations = require("../caculations");

const handleOrbitalVelocity = () => {
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
          "Enter the radius of the primary body in meters or leave blank to use the radius of Kerbin",
        default: () => 600000
      },
      {
        type: "input",
        name: "alitude",
        message:
          "What is the alitude of the orbit (in meters) you would like to calculate the speed of?"
      }
    ])
    .then(answers => {
      const { mass, radius, alitude } = answers;
      console.log(
        `Orbital velocity at altitude ${alitude}m will be${calculations.orbitalVelocity(
          parseInt(alitude),
          mass,
          radius
        )}`
      );
    });
};

module.exports = handleOrbitalVelocity;
