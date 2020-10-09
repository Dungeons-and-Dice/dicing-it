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
        getModifier: function() {
            const inputModifier = parseInt($('#modifier').val());
            return(inputModifier);
        },
    };
    
    
    $('#buttons button').click(function() {
        chosenDice = $(this).attr('id');
        let diceRoll = diceOptions.roll();
        let modifier = diceOptions.getModifier();
        let result = diceRoll + modifier;
        
        $('#printedNumber').text(`${result}`);
    });

    // Second Dice Part

    $('#otherDice button').click(function () {
        chosenDice = $('input[name="dice"]:checked').val();
        let diceRoll = diceOptions.roll();
        let modifier = diceOptions.getModifier();
        let result = diceRoll + modifier
        $('#secondPrintedNumber').text(`${result}`);

    });
});
  
// * Do we want to display the roll and modifier? 
// ? Set default mod to 0
// ! Refactor the rolling functions so we're declaring less identical variables (callbacks/promises????) 
    
        