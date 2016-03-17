// 1.
  function maxOfTwoNumbers(x,y) {
    if(x >= y ) {
      return x;
    } else {
      return y;
    }
}

console.log(maxOfTwoNumbers(3,9));

// 2.
  function maxOfThree (x,y,z) {
    if(x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y;
    } else {
      return z;
    }
  }

  console.log(maxOfThree(3,6,1));

// 3.
  function isCharAVowel (letter) {
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
          return true;
        } else {
          return false;
        }
  }
console.log(isCharAVowel('a'));
console.log(isCharAVowel('e'));
console.log(isCharAVowel('i'));
console.log(isCharAVowel('b'));
console.log(isCharAVowel('c'));
console.log(isCharAVowel('o'));


// 4.
  function sumArray (x,y,z) {
    var x = 34;
    var y = 2;
    var z = 252;
  }
  console.log sumArray (x+y+z)

//5.
