function printallNames (name1, name2, name3) {
  return `Here are all the names: ${name1}, ${name2}, ${name3}`;
}
console.log(printallNames(`Tomas`, `Martynas`, `Robertas`))

console.log("------------")

var skaicius = (prompt("skaicius"));
function counter (skaicius) {
  for (var i = 1; i<= skaicius; i++) {
    console.log(i);
  }
}
counter(skaicius);
console.log("-----------")

function sveikiname(skaicius) {
  var text = "";
  for (var i = 1; i <= skaicius; i++) {
    if (i === skaicius) {
      text = text + "valio!";
    } else {
      text = text + "valio,"
    }
  }
  return text;
}
console.log(sveikiname(3));

console.log("------------")

function sum(x, y) {
  return x + y;
}
function dividedByTwo(num) {
  return sum / 2;
}
let result = sum(10, 8);
dividedByTwo(result);
console.log(result);
console.log("-------------");

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line = line + "*"
  }
  return line + "\n";
}
function buildTriangle(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result = result + makeLine(i);
  }
  return result;

}
console.log(buildTriangle(10));

console.log("------------------------------");

let sayHello = function() {
  return "hello my friend";
}
console.log(sayHello());
console.log("------------------");

let delivery = true;
let destination = "Ukmerge";
let priveItem = 40;
let costDelivery = 20;
let productArr = [true, "Ukmerge", 40, 20];
console.log(productArr);
console.log(productArr.length)

console.log("------------------");

let adelivery = true;
let adestination = "Ukmerge";
let apriveItem = 40;
let acostDelivery = 20;
let aproductArr = [true, "Ukmerge", 40, 20];
console.log(productArr.push("Zarasai"));
console.log(productArr);
console.log(productArr[productArr.length - 1]);

console.log("------------------");

let aadelivery = true;
let aadestination = "Ukmerge";
let aapriveItem = 40;
let aacostDelivery = 20;
let aaproductArr = [true, "Ukmerge", 40, 20];
console.log(aaproductArr.pop());
console.log(aaproductArr);

console.log("-------------");
let aaaproductArr = [true, "Ukmerge", 40, 20];
console.log(aaaproductArr.splice(2, 0, "naujas elementas"));
console.log(aaaproductArr);

console.log("------------------------");
var rainbow = ["red", "orange", "blacberry", "blue"];
rainbow.splice(2, 2, "yellow", "gree", "blue", "purple");
console.log(rainbow);

console.log("-------------------");

let team = ["player1", "player2", "player3", "player4", "player5", "player6", "player7"];
function hasEnoughPlayers() {
  if (team.length >= 7) {
    return ("team has 7, it is enough");
  } else {
    return ("team hasn't got enough players");
  }
}
console.log(team);
console.log("-------------------");

let aaaaproductArr = [true, "Ukmerge", 40, "blablabla", 20];
rainbow.splice(2, 2, "yellow", "gree", "blue", "purple");
console.log(aaaaproductArr);
console.log(aaaaproductArr.join("*"));
console.log(aaaaproductArr.includes(20));
console.log("-----------------");

let blabla = ["vilnius", "kaunas", "siauliai", "marijampole"];
function didziosios(param) {
  for (let i = 0; i < param.length; i++) {
    param[i] = param[i].toUpperCase();
  }
  return param;
}
console.log(didziosios(blabla));

console.log("-----------------");

var stai = ["vilnius", "kaunas", "siauliai", "marijampole"];
stai.forEach(function(element) {
  console.log(element);
});
console.log("----------------------");

let city = ["vilnius", "kaunas", "siauliai", "marijampole"];
function myArrFunc(param) {
  let arr2 = []
  param.forEach(function(item) {
    arr2.push(item.toUpperCase());
  });
  return arr2;
}
  console.log(myArrFunc(city));
