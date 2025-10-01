const palindromes = function (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    while (!str[left].match(/[A-Za-z0-9]/i)) left++;
    while (!str[right].match(/[A-Za-z0-9]/i)) right--;

    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
