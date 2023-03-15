let password =`myPassword1!`;
let secret =`My favourite colour is #000080! `;
let attempts= 1;
let userInput= prompt (`Enter the password`);
console.log (userInput);


while (attempts<3){
    attempts=attempts+1;
    if (userInput === password){
        alert(secret)
        attempts=3;}   //Easy way to stop it requesting after the correct answer is given
        else {
            userInput= prompt (`Enter the password`);
        }
       
}
//still trying to figure out part E



/*function authenticateUser(userInput){
while (attempts<3){
    if (userInput === password){
        return true;
      attempts=3
   } else { attempts=attempts+1;
    return false;

}
}
}

let isLoggedIn= authenticateUser()

console.log (isLoggedIn);

/* if (isLoggedIn === true){
    alert(secret);
 }
*/



