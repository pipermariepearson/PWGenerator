// creates generate button and assigns 
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//Runs through user input prompts
  function generatePassword(){
  var charaValue = prompt("How many letters would you like?");
  if (charaValue < 8){
    alert("Your password is too short. Please create a password between 8 and 128 characters");
    
  } else if (charaValue > 128) {
    alert("Your password is too long. Please create a password between 8 and 128 characters");
  } else {
    alert("Your password will be " + charaValue + " characters long.");
    console.log(charaValue);
  }
  var upperCase = prompt("Would you like Uppercase letters?");
  if (upperCase === "yes"){
    console.log(upperCase);
  } else {
    alert("Your password will not have uppercase letters.");
  }

  var specialChara = confirm("Select confirm if you would like special characters in your password")
  if (specialChara === true){
    alert("Your password will include special characters");
    console.log(specialChara);
  } else {
    alert("Your password will not include special characters")
  }

  if (upperCase === "yes" && specialChara ==="true"){

var pwdChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var pwdLen = 10
var randPassword = Array(pwdLen).fill(pwdChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
    
  }


} 
  


  
  
}


      
      







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
