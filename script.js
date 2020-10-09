$(function(){
    let chosenDice = 0;

    let diceOptions = {
        d4: 4,
        d6: 6,
        d8:8,
        d10: 10,
        d12: 12,
        d20: 20,
        d100: 100,
        roll: function (){
            const randomNumber = Math.floor(Math.random() * diceOptions[chosenDice]) + 1;
            return(randomNumber);
        },
    };

    $('#buttons button').click(function() {
        chosenDice = $(this).attr('id');
        modifier = parseInt( $("#modifier").val());
        console.log(modifier);
        let diceRoll = diceOptions.roll();
        console.log(diceRoll);
        let result = diceRoll + modifier;
        
        $('#printedNumber').text(`${result}`);
    });

    // Second Dice Part

    $('#otherDice button').click(function () {
        let radioValue = $('input[name="dice"]:checked').val();
        console.log(radioValue);
    });
});

// Input field, get number, roll that many dice

    
// * Do we want to display the roll and modifier? 
    
        