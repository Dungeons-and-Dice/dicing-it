$(function(){
    let chosenDice = 0;

    // Try to get this into diceOptions
    const diceArray = [];

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

        // for (let i = 0; i < diceArrray.length; i++ ) {sum += diceArray[i]}

        rollNumberOfDice: function(){
            const diceNumber = parseInt($('#diceNumber').val());
            for(let i = 1; i <= diceNumber; i++){
                const diceNumberRoll = this.roll();
                diceArray.push(diceNumberRoll);
                this.dieContainer.append(`${diceNumberRoll} + `);
            }
            
            this.dieContainer.append(`${diceOptions.getModifier()} (Modifier) <br>`);
            console.log(diceArray);
            // use forEach loop to add all the items or list them or something (map with a variable)
            // Print total
        },
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
        diceOptions.rollNumberOfDice()
    });
});
   
// ? Set default mod to 0
// ! Refactor the rolling functions so we're declaring less identical variables (callbacks/promises????) 
        