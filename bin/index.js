const figlet = require("figlet");

figlet("Orbit-CLI", (err, data) => {
  if (err) {
    console.log(`Something went wrong -> ${err}`);
    return;
  }
  console.log(data);
});
