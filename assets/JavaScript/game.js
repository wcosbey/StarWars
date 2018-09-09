//sets up random number user is trying to match

$(document).ready(function () {
    var Random = Math.floor(Math.random() * 121 + 19)
    $('#number').text(Random);




    var GeneratedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);


//sets up random numbers for each fish
function fourRandomNumbers() {
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 13 + 1);
        GeneratedNumbers.push(num);
    }
}
fourRandomNumbers();


//resets the game
function reset() {
    Random = Math.floor(Math.random()* 69 + 30);
    $('#number').text(Random);
    GeneratedNumbers = [];
    fourRandomNumbers();
    total = 0;
    $('#combined').text(total);

}   

//adds the wins to the total
function fishOn() {
    alert("Great Catch!!!");
        wins++;
        $('#numberWins').text(wins);
        reset();

}
//adds the losses to the total
function skunked() {
    alert("You got Skunked!!");
    losses++;
    $('#numberLosses').text(losses);
    reset();

}


// make buttons click
    $('#one').on('click', function () {
        total = total + GeneratedNumbers[0];
        $('#combined').text(total);

        
        if (total == Random) {
            fishOn();
        }
        else if (total > Random) {
            skunked();
        }
    })
    $('#two').on('click', function () {
        total = total + GeneratedNumbers[1];
        $('#combined').text(total);
        
        //sets win/lose conditions
        if (total == Random) {
            fishOn();
        }
        else if (total > Random) {
            skunked();
        }
    })

    $('#three').on('click', function () {
        total = total + GeneratedNumbers[2];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            fishOn();
        }
        else if (total > Random) {
            skunked();
        }
    })

    $('#four').on('click', function () {
        total = total + GeneratedNumbers[3];
        $('#combined').text(total);

        //sets win/lose conditions
        if (total == Random) {
            fishOn();
        }
        else if (total > Random) {
            skunked();
        }
    });


});