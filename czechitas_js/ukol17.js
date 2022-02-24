let pole = []
let pridat = Number(prompt("zadej číslo"))

while (pridat!=0) {
  pole.push(pridat)
  pridat = Number(prompt("zadej číslo"))
}

let nejmensi = pole[0]

for (let i = 0; i < pole.length; i++ ) {
  if (pole[i]<pole[0]) {
    nejmensi = pole[i]
  } 
}

console.log(pole)
console.log("nejmenší cislo z pole je " + nejmensi)