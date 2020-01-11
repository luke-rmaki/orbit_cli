const chalk = require("chalk");

const orbitalVelocity = (alitude, M, r) => {
  const G = 6.67408 * 10 ** -11;
  const orbitRadius = r + alitude;
  return chalk.black.bgRed(
    `${Number.parseFloat(Math.sqrt((G * M) / orbitRadius)).toFixed(2)} m/s`
  );
};

module.exports = orbitalVelocity;
