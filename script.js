$(function(){
    // let dice ={
    //     side:6,
    //     roll: function (){
    //         const randomNumber = Math.floor(Math.random() * this.side) + 1;
    //         return randomNumber
    //     },
        
    // }

    let diceOptions = {
        diceDice: chosenDice, 
        d4: 4,
        d6: 6,
        d10: 10,
        d12: 12,
        d20: 20,
        d100: 100,
        roll: function (){
            const randomNumber = Math.floor(Math.random() * this.diceOptions[chosenDice]) + 1;
            alert (randomNumber);
        },
    }

    $('#buttons button').click(function() {
        let chosenDice = $(this).attr('id');
        let result = diceOptions.roll();
        $('#printedNumber').text(`${result}`)
    });
});
    

    
        