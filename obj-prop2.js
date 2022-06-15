let box = {};
let bag = {
  prop: "bag",
  can: "box"
};
let can = {
  prop: "can",
  bag: "box"
};
box[bag] = "Monday";
box[can] = "Tuesday";

console.log(box[bag]);