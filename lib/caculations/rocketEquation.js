const rocketEquation = (isp, mStart, mEnd) => {
  const log = Math.log(mStart / mEnd);
  return isp * 9.8 * log;
};

module.exports = rocketEquation;
