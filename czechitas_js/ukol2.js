let jmeno_zena = prompt("Jmeno zeny:");
let jmeno_muz = prompt("jmeno muze:");
let rok_zena = Number(prompt("rok narozeni zeny:"))
let mesic_zena =Number(prompt("mesic narozeni zeny:"))
let rok_muz = Number(prompt("rok narozeni muz:"))
let mesic_muz = Number(prompt("mesic narozeni muze:"))

let rozdil_roky = (rok_zena - rok_muz)*12
let rozdil_mesice = mesic_zena - mesic_muz;
let rozdil_v_mesicich = rozdil_roky - Math.abs(rozdil_mesice)

console.log(jmeno_zena + "je o " + Math.floor(rozdil_v_mesicich/12) + " let a " + rozdil_v_mesicich%12 + " mesicu mladsi nez " + jmeno_muz);
