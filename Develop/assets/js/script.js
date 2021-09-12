//password length
var getPasswordLength = parseInt(prompt("Choose the number of charaters your password will contain."));
if (getPasswordLength < 8) {
  alert("Password must contain a minimum of 8 charaters!")
}

if (getPasswordLength > 128) {
  alert("A maximum number of 128 characters can be used!")
}

if (isNaN(getPasswordLength)) {
  alert("Invalid password. Please input password.");
  generatePassword();
}

// password criteria
var includeLowercase = window.confirm("Click OK to include lowercase letters.");

var includeUppercase = window.confirm("Click OK to include uppercase letters.");

var includeNumbers = window.confirm("Click OK to include numbers.");

var includeSymbols = window.confirm("Click OK to include  symbols.");

if (!includeLowercase && !includeUppercase && !includeNumbers && includeSymbols)
  alert("Minimum of 1 character type required!")

window.addEventListener('load', function() {

  generatePassword(); 
});
function generateNewPassword() {
  var password = "";

  var allowed = {};
  if (uppercase) password += random(allowed.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (lowercase) password += random(allowed.lowercase= "abcdefghijklmnopqrstuvwxyz");
  if (numbers) password += random(allowed.numbers = "1234567890");
  if (symbols) password += random(allowed.symbols= "!@#$%^&*()+[]{},.");

  for (var i = password.length; i < length; i++) password += random(random(allowed).value);

  document.getElementById("password").value = Math.floor(Math.random() password.length).join("");

return result;

  // // random uppercasecase
  // function getRandomUpper() {
  //   return String.fromCharCode((Math.floor(Math.random() * 26) + 65);
  // }

  // // random number
  // function getRandomNumber() {
  //   return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  // }

  // // random symbol
  //   function getRandomSymbol() {
  //   var symbols = '!@#$%^&*(){}=<>/,.';
  //   return symbols[Math.floor(Math.random() * 26) + 97];
  // }

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  passwordText.innerHTML = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

