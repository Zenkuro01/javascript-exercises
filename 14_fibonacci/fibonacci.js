const fibonacci = function (num) {
  if (typeof num === "string") num = Number(num);

  if (num < 0) return "OOPS";
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  let a = 1;
  let b = 1;

  for (let i = 3; i <= num; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
