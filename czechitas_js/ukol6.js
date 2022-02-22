let a = Number(prompt("Zadej první stranu"));
let b = Number(prompt("Zadej druhou stranu"));
let c = Number(prompt("Zadej třetí stranu"));

let nejvetsi = max(a,b,c);
let nejmensi = min(a,b,c);
let stredni = 0;

if (a<b&&a>c) or (a>b&&a<c) {
  stredni = stredni + a
} else if (b<a&&b>c) or (b>a&&b<c) {
  stredni = stredni + b
} else if (c<a&&c>b) or (c>a&&c<b) {
  stredni = stredni + c
}

let soucet = stredni + nejmensi;

if (soucet > nejvetsi) {
  console.log("trojuhejnik jde sestrojit")
} else {
  console.log("trojuhelnik nejde sestrojit")
}

  
