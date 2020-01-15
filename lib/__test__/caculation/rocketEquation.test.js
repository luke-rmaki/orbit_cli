/* eslint-disable no-undef */
const rocketEquation = require("../../caculations/rocketEquation");

test("caculates delta v for a rocket stage", () => {
  expect(rocketEquation(285, 52.68, 28.68)).toBe(1698.2441601742444);
});
