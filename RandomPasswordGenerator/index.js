"use strict";
//random password generate
// const passwordLength = parseFloat(document.getElementById("length").value);
const passwordLength = 12;
console.log(passwordLength);
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = false;

const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
);

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+";
  let allowedChars = "";
  let password = "";

  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  //   console.log(allowedChars);

  if (length <= 0) {
    return "(password length must be at least 1)";
  }
  if (allowedChars.length === 0) {
    return `(At least 1 set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  return password;
}
document.getElementById("solutionText").textContent = `${password}`;

console.log(`Generated password: ${password}`);
