/* eslint-disable no-undef */
const orbitalPeriod = require("../../lib/caculations/orbitalPeriod");

test("Calculate period for 100km orbit around Kerbin", () => {
  expect(orbitalPeriod(100000, 100000, 5.2915158 * 10 ** 22, 600000)).toBe(
    "32.64"
  );
});
