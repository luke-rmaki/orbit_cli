const inquirer = require("inquirer");
const calculations = require("../caculations");

const sortAnswer = answer => {
  switch (answer.calculations) {
    case "Velocity at a specific orbit":
      inquirer
        .prompt([
          {
            type: "input",
            name: "mass",
            message:
              "Enter the mass of the primary body or leave blank to use the mass of Kerbin",
            default: () => false
          },
          {
            type: "input",
            name: "radius",
            message:
              "Enter the radius of the primary body in meters or leave blank to use the radius of Kerbin",
            default: () => false
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
          const msg = `Orbital veolcity at an alitude of ${alitude} will be `;
          if (mass && radius)
            console.log(
              msg +
                calculations.orbitalVelocity(parseInt(alitude), mass, radius)
            );
          else if (mass)
            console.log(
              msg + calculations.orbitalVelocity(parseInt(alitude), mass)
            );
          else if (radius)
            console.log(
              msg +
                calculations.orbitalVelocity(
                  parseInt(alitude),
                  undefined,
                  radius
                )
            );
          else
            console.log(msg + calculations.orbitalVelocity(parseInt(alitude)));
        });
      break;

    default:
      break;
  }
};

module.exports = sortAnswer;
