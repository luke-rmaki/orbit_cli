/* eslint-disable no-undef */
const orbitalVelocity = require("../../caculations/orbitalVelocity");

test("caculates orbital speed around Kerbin at 100km", () => {
  expect(orbitalVelocity(100000, 5.2915158 * 10 ** 22, 600000)).toMatch(
    "2246.14"
  );
});
