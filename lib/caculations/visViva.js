const visViva = (M, r, rOne, rTwo) => {
  // G -> gravitation constant
  const G = 6.67408 * 10 ** -11;
  // mu -> literal pronounciation of the Greek letter used to denote G x the mass of the primary body
  const mu = G * Number.parseFloat(M);
  // set radius for burn one based on which orbital radius (radius of main body plus the altitude of the orbit) is lower
  const rBurnOne = rOne < rTwo ? parseInt(rOne + r) : parseInt(rTwo + r);
  // set radius for burn two based on which orbital radius (radius of main body plus the altitude of the orbit) is higher
  const rBurnTwo = rTwo > rOne ? parseInt(rTwo + r) : parseInt(rOne + r);

  const rOnePlusTwo = rBurnOne + rBurnTwo;

  const muDivROne = mu / rBurnOne;
  const muDivRTwo = mu / rBurnTwo;

  let deltaVOne = Math.sqrt(muDivROne);
  deltaVOne *= Math.sqrt((2 * rBurnTwo) / rOnePlusTwo) - 1;
  deltaVOne = Number.parseFloat(deltaVOne).toFixed(2);

  let deltaVTwo = Math.sqrt(muDivRTwo);
  deltaVTwo *= 1 - Math.sqrt((2 * rBurnOne) / rOnePlusTwo);
  deltaVTwo = Number.parseFloat(deltaVTwo).toFixed(2);

  return { deltaVOne, deltaVTwo };
};

module.exports = visViva;
