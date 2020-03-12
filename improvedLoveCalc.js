var a = prompt("Please enter first name: ");
var b = prompt("Please enter the second name: ");



function loveCalcImproved(a, b) {
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n);

    if(n === 100){
        console.log("You got a 100% match. Big ups " + a + " " + b);
    }
    if(n >= 50 && n <= 99){
        console.log(" You got a pretty decent match of " + n + " %. It's a match made in heaven!");
    }
    else{
         console.log(" You got a pretty shitty match! It's come in at " + n + " %. I wouldn't bother!!");
    }
}


loveCalcImproved(a, b);
// console.log(a);
// console.log(b);