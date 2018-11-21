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
