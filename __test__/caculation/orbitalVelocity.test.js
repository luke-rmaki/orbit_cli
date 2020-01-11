/* eslint-disable no-undef */
const orbitalVelocity = require("../../lib/caculations/orbitalVelocity");

test("caculates orbital speed around Kerbin at 100km", () => {
  expect(orbitalVelocity(100000)).toMatch("2246.14 m/s");
});
