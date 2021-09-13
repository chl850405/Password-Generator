# Password Generator Starter Code

## Built with Html CSS and Javascript

## Html

* linked to CSS <link rel="stylesheet" href="./assets/css/style.css" />

* scripted to JavaScript <link rel="stylesheet" href="./assets/css/style.css" />

* textarea <textarea
            readonly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>

## CSS 

* Card
  background-color: hsl(0, 0%, 100%)
  border-radius: 5px
  border-width: 1px
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px
  color: hsl(206, 17%, 28%)
  font-size: 18px
  margin: 0 auto
  max-width: 800px
  padding: 30px 40px

* Button
  border: none
  background-color: hsl(360, 91%, 36%)
  border-radius: 25px
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 6px 0px rgba(0, 0, 0, 0.2) 0px 1px 1px
    0px
  color: hsl(0, 0%, 100%)
  display: inline-block
  font-size: 22px
  line-height: 22px
  margin: 16px 16px 16px 20px
  padding: 14px 34px
  text-align: center
  cursor: pointer

* Password
  -webkit-appearance: none
  -moz-appearance: none
  appearance: none
  border: none
  display: block
  width: 100%
  padding-top: 15px
  padding-left: 15px
  padding-right: 15px
  padding-bottom: 85px
  font-size: 1.2rem
  text-align: center
  margin-top: 10px
  margin-bottom: 10px
  border: 2px dashed #c0c7cf
  border-radius: 6px
  resize: none
  overflow: hidden

  ## JavaScript

* Arrays
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var numbers = "1234567890"
    var symbols = "!@#$%^&*()+[]{}"

* Variables
    var length = ""
    var confirmLowercase
    var confirmUppercase
    var confirmNumbers
    var confirmSymbols
    var characters = uppercase + lowercase + numbers + symbols
    var passwordFinal

* Generate Password
    var passwordFinal = ""; 
  for (var i = 0; i < length; i++) {
  passwordFinal =+ characters[ Math.floor(Math.random() * characters.length)] + passwordFinal;
  }
  return passwordFinal;

* Password Length
  function generatePassword() { 
    var passwordFinal = ""; 
  for (var i = 0; i < length; i++) {
  passwordFinal =+ characters[ Math.floor(Math.random() * characters.length)] + passwordFinal;
  }
  return passwordFinal;

* Password Criteria
    
    + lower case letters

    var confirmLowercase = window.confirm("Click OK to include lowercase letters.");
    if (confirmLowercase === true){
    } else

     + uppercase letters

     var confirmUppercase = window.confirm("Click OK to include uppercase letters.");
    if (confirmUppercase === true){
    alert ('Your password will contain uppercase characters.')
    } else

    + symbols

    var confirmSymbols = window.confirm("Click OK to include  symbols.");
    if (confirmSymbols === true){
    alert ('Your password will contain symbols.')
    } else {
    (!lowercase && !uppercase && !numbers && symbols)
    alert('Minimum of 1 character type required!')
    }

    + numbers

    ("Click OK to include numbers.");
    if (confirmNumbers === true){
    alert ('Your password will contain numbers.')
    } else

![The mockup](./Develop/assets/images/password-generator.png) Password-Generator

https://github.com/chl850405/Password-Generator.git

https://chl850405.github.io/Password-Generator/


