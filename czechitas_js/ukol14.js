function jestelaskavejsifunkce (x) {
  let prvocislo = true
  for (i = 2; i<x; i++) {
    if (x%i==0){
      prvocislo = false
      break;
    }
  }
  return prvocislo
}

jestelaskavejsifunkce (5)

jestelaskavejsifunkce(8)
