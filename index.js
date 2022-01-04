import pieeeee from "./packages/pi.js";
import "./packages/dayjs.min.js";

const dayjsDate = dayjs("2019-03-01");
console.log(dayjsDate.format("YYYY-MM-DD"));
console.log(pieeeee);

var root = document.getElementById("root");
root.innerText = dayjsDate.format("YYYY-MM-DD");
root.style.color = "red";
