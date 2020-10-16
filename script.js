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

        rollNumberOfDice: function(){
            const diceNumber = parseInt($('#diceNumber').val());
            let total = 0;
            for(let i = 1; i <= diceNumber; i++){
                const diceNumberRoll = this.roll();
                diceArray.push(diceNumberRoll);
                this.dieContainer.append(`${diceNumberRoll} + `);
            }
            
            let modifier = diceOptions.getModifier();

            this.dieContainer.append(`${modifier} (Modifier)`);
            console.log(diceArray);

            for (let i = 0; i < diceArray.length; i++){
                total += diceArray[i];
            }
            
            let result = total + modifier;
            this.dieContainer.append(` = ${result} <br>`);


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
        diceArray.length = 0;
        chosenDice = $('input[name="dice"]:checked').val();
        diceOptions.rollNumberOfDice()
    });

    $('#clear').click(function () {
        $('#dieContainer').html('');
    });
});
   
// ? Set default mod to 0
// ! Refactor the rolling functions so we're declaring less identical variables (callbacks/promises????) 
        
//take the values of all the dice rolled, add em together, give total!!!