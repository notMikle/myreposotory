let num = 3212;

function squareDigits(num) {
  let array = ("" + num).split("").map(Number);
  console.log(array);
  let a = array.map((el) => el ** 2);
  console.log(a);
  let b = a.join("");
  let c = Number(b);
  console.log(c);
  return c;
}
squareDigits(3212);
