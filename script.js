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
        d8:8,
        d10: 10,
        d12: 12,
        d20: 20,
        d100: 100,
        roll: function (){
            const randomNumber = Math.floor(Math.random() * diceOptions[chosenDice]) + 1;
            return(randomNumber);
        },
    }

    //to get value of modifier, we need to add number to text box, .val and add it to the rolled number


    $('#buttons button').click(function() {
        chosenDice = $(this).attr('id');
        modifier = parseInt( $("#modifier").val());
        console.log(modifier)
        let diceRoll = diceOptions.roll()
        console.log(diceRoll)
        let result = diceRoll + modifier;
        
        $('#printedNumber').text(`${result}`);

    });
});
    

    
        