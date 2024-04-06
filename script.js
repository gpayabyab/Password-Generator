// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password

function generatePassword(){
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
const passwordLength =  prompt("Please enter the length of your password")

if (passwordLength < 8 || passwordLength > 128) {
  alert('did not meet criteria. needs to be between 8-128 characters')
  return;
}


// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
var lowercaseConfirm = confirm("Do you want to include lowercase characters?")
var uppercaseConfirm = confirm("Do you want to include uppercase characters?")
var numericConfirm = confirm("Do you want to include numeric characters?")
var specialCharactersConfirm = confirm("Do you want to include special characters?")

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected 
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// Validate at least one character type is selected
if (!lowercaseConfirm && !uppercaseConfirm && !numericConfirm && !specialCharactersConfirm) {
  alert('Please select at least one character type.');
  return;
}

// Define character sets based on selected criteria
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

let selectedChars = '';

if (lowercaseConfirm) {
  selectedChars += lowercaseChars;
}
if (uppercaseConfirm) {
  selectedChars += uppercaseChars;
}
if (numericConfirm) {
  selectedChars += numericChars;
}
if (specialCharactersConfirm) {
  selectedChars += specialChars;
}

// Generate password based on selected criteria
let password = '';
for (let i = 0; i < passwordLength; i++) {
  const randomIndex = Math.floor(Math.random() * selectedChars.length);
  password += selectedChars[randomIndex];
}

return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
