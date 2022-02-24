//přidávání do pole
let pole = []
let pridat = Number(prompt("zadej číslo"))

while (pridat!=0) {
  pole.push(pridat)
  pridat = Number(prompt("zadej číslo"))
}
//hledání čísla
let hledane = Number(prompt("zadej hledane cislo"))
let najite = 0

for (let i = 0; i < pole.length; i++ ) {
  if (pole[i]===hledane) {
    najite = pole[i]
    console.log(najite)
    break
  }
}

if (najite ==0) {
  console.log("nic")
}

