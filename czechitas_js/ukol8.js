let cislo = Number(prompt("napiš čislo"));
let soucet = 0

while (cislo != 0) {
  soucet = soucet + cislo
  console.log("Vstup:" + cislo)
  console.log("Součet:" + soucet)
  cislo = Number(prompt("napiš cislo"))
}