const visViva = (M, r, rOne, rTwo) => {
  const G = 6.67408 * 10 ** -11;
  const muu = G * Number.parseFloat(M);
  const rBurnOne = rOne < rTwo ? parseInt(rOne + r) : parseInt(rTwo + r);
  const rBurnTwo = rTwo > rOne ? parseInt(rTwo + r) : parseInt(rOne + r);

  const rOnePlusTwo = rBurnOne + rBurnTwo;

  const muuDivROne = muu / rBurnOne;
  const muuDivRTwo = muu / rBurnTwo;

  let deltaVOne = Math.sqrt(muuDivROne);
  deltaVOne *= Math.sqrt((2 * rBurnTwo) / rOnePlusTwo) - 1;
  deltaVOne = Number.parseFloat(deltaVOne).toFixed(2);

  let deltaVTwo = Math.sqrt(muuDivRTwo);
  deltaVTwo *= 1 - Math.sqrt((2 * rBurnOne) / rOnePlusTwo);
  deltaVTwo = Number.parseFloat(deltaVTwo).toFixed(2);

  return { deltaVOne, deltaVTwo };
};

module.exports = visViva;
