$(function(){
    let chosenDice = 0;
    let diceRoll = 0;

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
        getSecondModifier: function() {
            const inputSecondModifier = parseInt($('#secondModifier').val());
            // console.log(inputSecondModifier)
            return(inputSecondModifier);
        },

        dieContainer : $('#dieContainer'),
        insertRollContainer: $('#insertRollContainer'),

        
        rollNumberOfDice: function(){
            const diceNumber = parseInt($('#diceNumber').val());
            let total = 0;
            let changeClass = $('ul#insertRollContainer li').length;
            // console.log(changeClass)
            this.insertRollContainer.prepend(`<li class=${changeClass}></li>`);
            insertRoll =  $(`.${changeClass}`);
            // $('li').removeClass().addClass("please" + $(this).val);
            for(let i = 1; i <= diceNumber; i++){
                const diceNumberRoll = this.roll();
                diceArray.push(diceNumberRoll);
                insertRoll.append(`${diceNumberRoll} + `);
            }
            
            let secondModifier = diceOptions.getSecondModifier();

            for (let i = 0; i < diceArray.length; i++){
                total += diceArray[i];
            }
            
            let result = total + secondModifier;

            insertRoll.append(`<span class="secondModifier"> ${secondModifier} </span> = <span class="bold"> ${result} </span>`);
        },

        checkForNum: function() {
            if (diceRoll === 1) {
                $('#printedNumber').addClass('animate__hinge');
            } else if (diceRoll === diceOptions[chosenDice]) {
                $('#printedNumber').addClass('animate__heartBeat');
            } else { 
                console.log('everything is fine');
            }
        }
    };
    
    $('#buttons button').click(function() {
        $('#printedNumber').removeClass('animate__hinge').removeClass('animate__heartBeat');
        chosenDice = $(this).attr('id');
        diceRoll = diceOptions.roll();
        let modifier = diceOptions.getModifier();
        let result = diceRoll + modifier;
        diceOptions.checkForNum();
        
        $('#printedNumber').html(`${diceRoll} + <span class="modifier"> ${modifier} </span> = <span class="bold"> ${result} </span>`);

    });

    // Second Dice Part

    $('#otherDice button').click(function (e) {
        e.preventDefault();
        diceArray.length = 0;
        chosenDice = $('input[name="dice"]:checked').val();
        diceOptions.rollNumberOfDice()
    });

    $('#clear').click(function () {
        $('#insertRollContainer').html('');
    });
});
   
// ? Set default mod to 0
// ! Refactor the rolling functions so we're declaring less identical variables (callbacks/promises????) 
        