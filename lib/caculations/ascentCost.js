const orbitalVelocity = require("./orbitalVelocity");
const visViva = require("./visViva");

const ascentCost = (mass, radius, rotationalSpeed, altitude) => {
  console.log(mass, radius, rotationalSpeed, altitude);
  const orbitVelocity = orbitalVelocity(altitude, mass, radius);
  const { deltaVOne, deltaVTwo } = visViva(mass, radius, 0, altitude);
  return {
    launchBurn: Number.parseFloat(
      orbitVelocity - rotationalSpeed + deltaVOne
    ).toFixed(2),
    circularisationBurn: deltaVTwo
  };
};

module.exports = ascentCost;
