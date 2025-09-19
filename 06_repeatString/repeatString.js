const repeatString = function (string, repeaterNo) {
  if (repeaterNo < 0) return "ERROR";

  let newString = "";
  for (let i = 0; i < repeaterNo; i++) newString += string;

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
