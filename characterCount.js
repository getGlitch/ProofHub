function countString(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === letter) {
      count += 1;
      document.write("index number: ", i);
    }
  }
  document.write(count);
}
countString("tell me more", "e");
