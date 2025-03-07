var figlet = require("figlet");
const colors = require("colors");
// import { green, rainbow } from './node_modules/colors/safe.d';

figlet("Kavi Dixit!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.green);
});
// console.log(figlet)
figlet.text(
    "Kavi!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data.rainbow);
    }
  );