let pole = [1,2,3,456,-5,6]
let nejmensi = pole[0]

for (let i = 0; i < pole.length; i++ ) {
  if (pole[i]<pole[0]) {
    nejmensi = pole[i]
  } 
}

console.log(nejmensi)