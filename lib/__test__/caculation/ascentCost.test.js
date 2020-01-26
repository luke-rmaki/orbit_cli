/* eslint-disable no-undef */
const ascentCost = require("../../caculations/ascentCost");

test("Calculate ascent cost", () => {
  expect(ascentCost(2.646e19, 60000, 9.3, 10000)).toMatchObject({
    launchBurn: "149.54",
    circularisationBurn: "6.23"
  });
});
