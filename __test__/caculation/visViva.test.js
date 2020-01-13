/* eslint-disable no-undef */
const visViva = require("../../lib/caculations/visViva");

test("Calculates Vis Viva equation for Hohman transfer in Kerbin orbit from 100 to 200km", () => {
  expect(visViva(5.2915158 * 10 ** 22, 600000, 100000, 200000)).toMatchObject({
    deltaVOne: "73.66",
    deltaVTwo: "71.24"
  });
});
