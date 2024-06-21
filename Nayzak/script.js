function Palindrome(num) {
  let originalNum = num;
  let reversedNum = 0;

  let numDigits = Math.floor(Math.log10(num)) + 1;

  for (let i = 0; i < numDigits; i++) {
    let digit = num % 10;
    reversedNum = reversedNum * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (originalNum === reversedNum) {
    console.log("palindromdur");
  } else {
    console.log("palindrom deyil");
  }
}

Palindrome(1221);

// 1221 / 10;
// 122 / 10;
// 12 / 10;
// 1;



