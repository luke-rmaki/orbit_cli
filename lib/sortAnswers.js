const handleOrbitalVelocity = require("./utils/handleOrbitalVelocity");
const handleVisViva = require("./utils/handleVisViva");
const handleRocketEquation = require("./utils/handleRocketEquation");
const handleOrbitalPeriod = require("./utils/handleOrbitalPeriod");

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
      break;
  }
};

module.exports = sortAnswer;
