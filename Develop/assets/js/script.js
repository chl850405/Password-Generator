function generatePasswordInfo() {

 //password length
  var getPasswordLength = parseInt(prompt("Choose the number of charaters your password will contain."));
    if (getPasswordLength < 8) {
    alert ("Password must contain a minimum of 8 charaters!")
  }

    if (getPasswordLength > 128) {
    alert ("A maximum number of 128 characters can be used!")
  }

    if (isNaN (getPasswordLength)) {
    alert("Invalid password. Please input password.");
    generatePassword();
  }

  // password criteria
  var includeLowercase = window.confirm("Click OK to include lowercase characters.");

  var includeUppercase = window.confirm("Click OK to include uppercase characters.");

  var includeNumbers = window.confirm("Click OK to include numbers.");

  var includeLowercase = window.confirm("Click OK to include  symbols.");

  if (!includeLowercase && !includeUppercase && !includeNumbers && includeSymbols)
  alert("Minimum of 1 character type required!")

  //display password
  var passwordInfo = {
  passwordLength: getPasswordLength,
  passwordLowerCase: includeLowercase,
  passwordUppercase: includeUppercase,
  passwordNumbers: includeNumbers,
  passwordsymbols: includeSymbols
};

  return passwordInfo;
}

//create random password from charCode
function generatePassword(){

// random lowercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// random uppercasecase
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// random symbol
function getRandomSymbol() {
  var symbols = '!@#$%^&*(){}=<>/,.';
  return symbols[Math.floor(Math.random() * 26) + 97];
}

//displays password
for (var i = 0; i < passwordIncludes.passwordLength; i++) {
  var c = getRandomChar(availableCharacters);

  generatedPassword.join("");
}

return generatePassword.push(c);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector ("#password")

  passwordText.innerHTML = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
