const orbitalPeriod = (periapsis, apoapsis, mass, radius) => {
  // G -> gravitation constant
  const G = 6.67408 * 10 ** -11;
  // mu -> literal pronounciation of the Greek letter used to denote G x the mass of the primary body
  const mu = G * mass;
  const semiMajorAxis = (periapsis + radius + apoapsis + radius) / 2;
  const { PI, sqrt } = Math;
  return Number.parseFloat(
    (2 * PI * sqrt(semiMajorAxis ** 3 / mu)) / 60
  ).toFixed(2);
};

module.exports = orbitalPeriod;
