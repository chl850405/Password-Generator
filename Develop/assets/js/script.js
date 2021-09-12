//Arrays
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!@#$%^&*()+[]{}";


//Variables
var length = "";
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSymbols;
var characters = uppercase + lowercase + numbers + symbols;
var passwordFinal

var length = parseInt(prompt("Choose the number of charaters your password will contain.")); {
if (length < 8) {
  alert("Password must contain a minimum of 8 charaters!")
  // var length = (prompt("Your password will contain (8-128) characters."));
};

if (length > 128) {
  alert("A maximum number of 128 characters can be used!")
};

if (isNaN(length)) 
  alert("Invalid password. Please input password.");
  
// password criteria
var confirmLowercase = window.confirm("Click OK to include lowercase letters.");
if (confirmLowercase === true){
} else {
  
};
}  
var confirmUppercase = window.confirm("Click OK to include uppercase letters.");
if (confirmUppercase === true){
  alert ('Your password will contain uppercase characters.')
  } else {

  }

var confirmNumbers = window.confirm("Click OK to include numbers.");
if (confirmNumbers === true){
  alert ('Your password will contain numbers.')
  } else {
    
  }

  var confirmSymbols = window.confirm("Click OK to include  symbols.");
  if (confirmSymbols === true){
    alert ('Your password will contain symbols.')
    } else {
  (!lowercase && !uppercase && !numbers && symbols)
  alert('Minimum of 1 character type required!')
    }
function generatePassword() { 
var passwordFinal = ""; 
  for (var i = 0; i < length; i++) {
  passwordFinal =+ characters[ Math.floor(Math.random() * characters.length)] + passwordFinal;
  }
  return passwordFinal();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
