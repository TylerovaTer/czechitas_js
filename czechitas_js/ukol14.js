function jestelaskavejsifunkce (x) {
  let prvocislo = true
  for (i = 2; i<x; i++) {
    if (x%i==0){
      prvocislo = false
      console.log("není")
      break;
    } else {
      console.log("je")
      break
    }
  }
  return prvocislo
}


jestelaskavejsifunkce(11)

