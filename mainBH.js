let password = `myPassword1!`;                  
let secret = `My favourite colour is #000080!`;
let attempts = 0;                                 // count password attempts
let limit = 3;                                    // the limit of attempts made
let stopLooping = false;                          // variable to stop the loop when needed

let userInput;                                    // not assigned yet

/*
while (userInput != password && !stopLooping) {   // while userInput is not equal to password - AND - stopLooping is FALSE (! in front is a logic reversal operator)
  if (attempts < limit) {                         // if the number of attempts is less and the limit
    userInput = prompt("Enter the password");     // Prompt user for password
    attempts++;                                   // add 1 to the number of attempts
  } else {                                        // else
    stopLooping = true;                           // stopLooping is TRUE (3 attempts made OR the password is entered correctly)
  } 
}
if (stopLooping) {                                // if stopLooping is TRUE 
  alert("Blocked");                               // display "Blocked"
} else {                                          // else
  alert(secret);                                  // display secret
}
*/


/*

function authenticateUser() {                     // function declaration
  while (attempts < limit) {                      // while the number of attempts is less than the limit
    userInput = prompt("Enter the password");     // prompt user for password
    if (userInput === password) {                 // if the password entered matches the password
      return true;                                // return TRUE
    } else {                                      // else
      attempts++;                                 // add 1 to the number of attempts
    }
  }
return false;                                     // when the number of attempts reaches the limit, return FALSE
}

let isLoggedIn = authenticateUser();              // variable isLoggedIn declared and assigned to authenticateUser()

if (isLoggedIn) {                                 // if isLoggedIn is TRUE
  alert(secret);                                  // reveal secret
} else {                                          // else
  alert("Blocked");                               // display 'blocked'
}

*/