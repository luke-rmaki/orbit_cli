const handleOrbitalVelocity = require("./utils/handleOrbitalVelocity");
const handleVisViva = require("./utils/handleVisViva");
const handleRocketEquation = require("./utils/handleRocketEquation");

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
    default:
      break;
  }
};

module.exports = sortAnswer;
