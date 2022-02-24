let cislo = Number(prompt("napiš čislo"));
let soucet = 0
let vypocet = soucet + " + " + (cislo)

while (cislo != 0) {
  console.log("Vstup:" + cislo)
  vypocet = soucet + " + " + (cislo)
  soucet = soucet + cislo
  console.log(vypocet + " = " + soucet)
  cislo = Number(prompt("napiš cislo"))
}