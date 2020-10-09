$(function(){
    // let dice ={
    //     side:6,
    //     roll: function (){
    //         const randomNumber = Math.floor(Math.random() * this.side) + 1;
    //         return randomNumber
    //     },
        
    // }

    let chosenDice = 0;

    let diceOptions = {
        d4: 4,
        d6: 6,
        d10: 10,
        d12: 12,
        d20: 20,
        d100: 100,
        roll: function (){
            const randomNumber = Math.floor(Math.random() * diceOptions[chosenDice]) + 1;
            console.log(randomNumber);
        },
    }

    $('#buttons button').click(function() {
        chosenDice = $(this).attr('id');
        let result = diceOptions.roll();
        $('#printedNumber').text(`${result}`)
    });
});
    

    
        