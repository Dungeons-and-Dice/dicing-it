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

        dieContainer : $('#dieContainer'),

        getNumberOfDice: function(){
            const diceNumber = parseInt($('#diceNumber').val());
            for(let i = 0; i <= diceNumber; i++){
                console.log(i)
            
            }
            
            // return(diceNumber)
            //for loop will repeat, so lets make a variable for diceNumberI,  then diceNumberI.roll
            //outside of for loop, dice.'all the i's put together' will be out result 
        }
        
    };
    
    
    $('#buttons button').click(function() {
        chosenDice = $(this).attr('id');
        let diceRoll = diceOptions.roll();
        let modifier = diceOptions.getModifier();
        let result = diceRoll + modifier;
        
        $('#printedNumber').text(`${diceRoll} + ${modifier} = ${result}`);
    });

    // Second Dice Part

    $('#otherDice button').click(function () {
        chosenDice = $('input[name="dice"]:checked').val();
        let diceRoll = diceOptions.roll();
        let modifier = diceOptions.getModifier();
        let result = diceRoll + modifier
        $('#secondPrintedNumber').text(`${diceRoll} + ${modifier} = ${result}`);
        diceOptions.getNumberOfDice()
    });
});
  
// * Do we want to display the roll and modifier? 
// ? Set default mod to 0
// ! Refactor the rolling functions so we're declaring less identical variables (callbacks/promises????) 

//get a number for dice#, parse into the input.  
//tell it to run let diceRoll x many times.
    
        