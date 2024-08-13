// Hello
function hello(){
    var name = prompt("Your Name")
    var letter1 = name.slice(0, 1)
    var letters = name.slice(1)

    var firstLetter = letter1.toUpperCase();
    var otherLetters = letters.toLowerCase();
    newName = (firstLetter + otherLetters)
    alert("Hello " + newName)
}




// DogAge to Human Age.
function dogAge(){
    var dogAge = prompt("What is your dog age in Years ?");
    var humanAge = (dogAge - 2) * 4 + 21;
    alert("it is " + humanAge)
    if (humanAge > 100) {
        alert("your dog is older than Queen Elizabeth II")
    }
}


//robot buy milk based on how many dollar you gave him.

function getMilk(dollar) {
    console.log("Leave house");
    console.log("Move right");
    console.log("Move Right");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("Move forward");
    console.log("move right");
    console.log("Move Right");
    console.log("EnterStore");
    console.log(numberOfMilk(dollar, 1.5))
    console.log("Leavs store");
    console.log("Move left");
    console.log("Move left");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move backward");
    console.log("Move left");
    console.log("Move Left");
    console.log("Enter home");
    console.log(theRemaining(dollar))
    alerts(dollar, 1.5)
}

function numberOfMilk(money, cost) {
    var bottles = Math.floor(money / cost)
    return bottles
}

function theRemaining(money) {
    var remainMoney = money % 1.5;
    return remainMoney
}
function alerts(money, cost) {
    var milks = Math.floor(money / cost)
    var remain = money % 1.5
    alert("You Have Bought " + milks + ", And Here Is Your " + remain + "$ remaining")
}

// are u good?
function goodMembers(names) {
    var good = ["salah", "aryan", "ksy" , "dler" ,]
    var name = names;


        if (name =="rahman" || name == "hameed") {
        alert("your sister pussy")
    }   if (name == "auop"){
        alert("وحششش")
    } if (name == "ksy"){
        alert("وردي و بيه بريد")
    } else if (good.includes(name)){
        alert("اكليخرة كحبة")
    }


} 






// fuzzbuzz
var numbers=[]
var nextNumber = (0)
 

function count(){
    nextNumber++
    if ((nextNumber%3)==0 &&(nextNumber%5)==0){
        numbers.push("fuzzbuzz")
    }   else{
        if ((nextNumber%3)==0){
        numbers.push("fuzz")
    }   else {
        if ((nextNumber%5)==0){
        numbers.push("buzz")
    }   else {
        numbers.push(nextNumber)
    }
    }
    }

    console.log(numbers)
}


// freeze

var freezeNumber=99
function freeze(){
while (freezeNumber => 0) {
    if (freezeNumber > 0){
         console.log(freezeNumber + " bottles of beer on the wall," + freezeNumber + " bottles of beer. Take one down, pass it around, " + (--freezeNumber) + " bottles of beer on the wall...")
    } else {
        console.log(freezeNumber + " bottles of beer on the wall," + freezeNumber + " bottles of beer. Take one down, pass it around, " + (--freezeNumber) + " bottles of beer on the wall...")
    }
}
}

// ai number guesser

function aiNumberGuesser() {
    alert("🎉 Welcome to the AI Number Guesser Game! 🎉");
    alert("The AI will try to guess your number as quickly as possible.");

    // Step 1: Player sets the range
    let lowerBound, upperBound;
    while (true) {
        lowerBound = parseInt(prompt("Enter the lower bound of the range: "), 10);
        upperBound = parseInt(prompt("Enter the upper bound of the range: "), 10);
        if (isNaN(lowerBound) || isNaN(upperBound) || lowerBound >= upperBound) {
            alert("Please make sure the lower bound is less than the upper bound and both are valid integers.");
            continue;
        }
        break;
    }

    // Step 2: Player selects the target number
    let targetNumber;
    while (true) {
        targetNumber = parseInt(prompt(`Pick a number between ${lowerBound} and ${upperBound} for the AI to guess:`), 10);
        if (isNaN(targetNumber) || targetNumber < lowerBound || targetNumber > upperBound) {
            alert(`Please pick a number within the range ${lowerBound} to ${upperBound}.`);
            continue;
        }
        break;
    }

    let attempts = 0;
    let aiGuess = null;
    let low = lowerBound;
    let high = upperBound;

    // Step 3: AI begins guessing
    while (aiGuess !== targetNumber) {
        attempts++;
        aiGuess = Math.floor((low + high) / 2); // AI guesses the midpoint

        alert(`\n🤖 AI guesses: ${aiGuess}`);

        if (aiGuess < targetNumber) {
            alert("🟢 Feedback: Higher");
            low = aiGuess + 1;
        } else if (aiGuess > targetNumber) {
            alert("🔴 Feedback: Lower");
            high = aiGuess - 1;
        } else {
            alert("🎯 Feedback: Correct!");
            break;
        }
    }

    // Step 4: Ending the game with a summary message
    alert(`\n🎉 The AI guessed your number ${targetNumber} correctly in ${attempts} attempts! 🎉`);

    if (attempts <= 5) {
        alert("Impressive! The AI is on fire! 🔥");
    } else if (attempts <= 10) {
        alert("Well done! The AI did a good job. 👍");
    } else {
        alert("Phew! The AI finally got it. 😅");
    }
}







