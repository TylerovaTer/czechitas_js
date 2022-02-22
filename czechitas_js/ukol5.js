let cislo1 = prompt("Napiš první číslo")
let cislo2 = prompt("Napis druhe cislo")
let cislo3 = prompt("Napis treti cislo")

if (cislo1 > cislo2 && cislo1 > cislo3){
  console.log("nejvetsi cislo je " + cislo1)
} else if (cislo2 > cislo1 && cislo2 > cislo3) {
  console.log("nejvetsi cislo je " + cislo2)
} else {
  console.log("nejvetsi cislo je " + cislo3)
}
