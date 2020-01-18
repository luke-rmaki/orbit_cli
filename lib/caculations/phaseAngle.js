const phaseAngle = (distance, altActive, altPassive, radius) => {
  const rOne = radius + altActive;
  const rTwo = radius + altPassive;
  const result =
    Math.acos((rTwo ** 2 + rOne ** 2 - distance ** 2) / 2) * rOne * rTwo;

  return result;
};

console.log(phaseAngle(5, 80, 90, 60));
