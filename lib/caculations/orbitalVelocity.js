const orbitalVelocity = (alitude, M, r) => {
  // G -> gravitation constant
  const G = 6.67408 * 10 ** -11;
  const orbitRadius = r + alitude;
  return Number.parseFloat(Math.sqrt((G * M) / orbitRadius)).toFixed(2);
};

module.exports = orbitalVelocity;
