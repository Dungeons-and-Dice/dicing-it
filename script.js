$(function(){




    let dice ={
        side:6,
        roll: function (){
            const randomNumber = Math.floor(Math.random() * this.side) + 1;
            return randomNumber
        },
        
    }
    
    

    $("#rollbutton").click(function(){
            let result = dice.roll();
            console.log(result)
            $(function(){
                $('#printedNumber').text(`${result}`)
             })
        })

})
    

    
        