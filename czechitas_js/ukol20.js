let osoba1 = {
  jmeno: prompt("zadej jmeno"),
  vek: prompt("zadej vek"),
}

let osoba2 = {
  jmeno: prompt("zadej jmeno"),
  vek: prompt("zadej vek")
}

let rozdil = osoba1.vek - osoba2.vek
console.log(osoba1.jmeno + " je starší o " + rozdil + " let")