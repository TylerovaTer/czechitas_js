//Modifikujte předchozí funkci tak, aby vypsala i důvod, proč
//není zadané číslo prvočíslo
function jestelaskavejsifunkce (x) {
  let delitel = 0
  let prvocislo = true
  for (i = 2; i<x; i++) {
    if (x%i==0){
      prvocislo = false
      delitel = i
      console.log("není prvocislo, je delitelne " + delitel)
      break;
    } else {
      console.log("je")
      break
    }
  }
  return prvocislo
}


jestelaskavejsifunkce(9)