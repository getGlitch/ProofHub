var i = 0,
  j = 1,
  k;
while (i < 40) {
  console.log(i);
  k = i + j;
  i = j;
  j = k;
}
