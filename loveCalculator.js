function loveGen(firstName, secondName) {
    var n = Math.random();
    n = n * 100;
    n = Math.floor(n);

    alert("The match between " + firstName + " and " + secondName + " is " + n + " %" );
}

loveGen("FirstName","SecondName");