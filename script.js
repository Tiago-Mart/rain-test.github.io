$(document).ready(function(){
    var i =0;
    var j=0;
    const entrada1 = $('div.geral div.entrada1')
    const entrada2 = $('div.geral div.entrada2')
    const verde2 = $('div.animation-1 div.verde2')
    const p1 = $('div.animation-1 p')
    const animation1 = $('div.animation-1')

    setTimeout(
        function(){
            $('div.svg-div div.text p').show()
        }, 490
    )

    $('div.svg-div div.text p').on('animationend',function(){
        
        $('div.svg-div').addClass('fade-out')
        $(this).off('animationend')

        $('div.svg-div').on('animationend',function(){
            j++
            if(j==2) $(this).hide()
        })

    })





    //Entrada1
    entrada1.on('animationend',function(){
        $('div.svg-div').css('display','flex')
        setTimeout(function(){
            entrada1.css({
              transform: 'scaleX(0)'  
            })
            entrada1.hide()
            entrada2.css('display', 'block')
        },4000)
        //
    })

    entrada2.on('animationend',function(){
        $(this).hide()
        $('div.entradas').hide()
        animation1.css('display','flex')
    })

    //Animação1
    $('div.animation-1 div.verde1').on('animationend',function(){
        $(this).hide();
        verde2.css('display', 'inline')
        animation1.css('background-color','rgba(0, 0, 0, 0.2)')
    })
    

    verde2.on('animationend',function(){
        $(this).hide()
        p1.css('display','inline')
        
    })

    p1.on('animationend', function(){
        $(this).hide()
        $('div.animation-1').addClass('desaparecer')
    })

    $('div.animation-1').on('animationend',function(){
        i+=1
        if(i==6){$('div.animation-1').hide()}
    })

    //Animação2
    $('div.animation-2 div.teste1').on('animationend',function(){
        $(this).hide();
        $('div.animation-2 div.teste2').css('display','block')
    })

    $('div.animation-2 div.teste2').on('animationend',function(){
        $(this).hide();
    })
})