const handleOrbitalVelocity = require("./utils/handleOrbitalVelocity");
const handleVisViva = require("./utils/handleVisViva");
const handleRocketEquation = require("./utils/handleRocketEquation");
const handleOrbitalPeriod = require("./utils/handleOrbitalPeriod");

/**
 * Function calls appropriate calculation handler based on inquirer prompt
 * @param {object} answer -> object with answers passed from initial inquirer prompt
 *
 */
const sortAnswer = answer => {
  switch (answer.calculations) {
    case "Velocity at a specific orbit":
      handleOrbitalVelocity();
      break;
    case "Vis Viva Equation":
      handleVisViva();
      break;
    case "Rocket Equation":
      handleRocketEquation();
      break;
    case "Orbital period":
      handleOrbitalPeriod();
      break;
    default:
      console.log("That is not a calculation at the moment");
      break;
  }
};

module.exports = sortAnswer;
