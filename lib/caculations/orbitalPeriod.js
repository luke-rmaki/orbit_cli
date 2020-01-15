const orbitalPeriod = (altitude, mass, radius) => {
  const G = 6.67408 * 10 ** -11;
  const muu = G * mass;
  const { PI, sqrt } = Math;
  return Number.parseFloat(
    (2 * PI * sqrt((radius + altitude) ** 3 / muu)) / 60
  ).toFixed(2);
};

module.exports = orbitalPeriod;
