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
function goodMembers() {
    var good = ["salah", "aryan", "ksy"]
    var name = prompt("what is your name")


        if (name =="rahman" || name == "hameed") {
        alert("your sister pussy")
    } else{
        if (good.includes(name)){
            alert("3er beak")
        } 
        if(name==""){
            
        }else{
            alert("wly")
        }
    }

} 











