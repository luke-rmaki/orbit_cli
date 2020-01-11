const handleOrbitalVelocity = require("../utils/handleOrbitalVelocity");

const sortAnswer = answer => {
  switch (answer.calculations) {
    case "Velocity at a specific orbit":
      handleOrbitalVelocity();
      break;
    default:
      break;
  }
};

module.exports = sortAnswer;
