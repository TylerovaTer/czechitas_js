let strana1 = Number(prompt("Zadej první stranu"));
let strana2 = Number(prompt("Zadej druhou stranu"));
let strana3 = Number(prompt("Zadej třetí stranu"));

if ((strana1 + strana2)>strana3){
  consol.log("trojuhelnik jde sestrojit")
}else {
  consol.log("nic")
}