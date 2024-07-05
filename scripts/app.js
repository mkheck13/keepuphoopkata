// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".


// for this we will make a if statement
// if he gets 10 or more then it will fire the message
// else it returns the other messege
// forgot the equals sign, needs to be equal to or greater then 10
function hoopCount(n){
    if (n >= 10){
        return "Great, now move on to tricks"
    }else{
        return "Keep at it until you get it"
    }
}