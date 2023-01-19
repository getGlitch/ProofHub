let sumOdd = 0;
let sumEven = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven = sumEven + i;
  }
  if (i % 2 != 0) {
    sumOdd = sumOdd + i;
  }
}
console.log(sumEven);
console.log(sumOdd);
