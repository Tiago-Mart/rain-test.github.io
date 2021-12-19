$(document).ready(function(){
    var i =0;
    const entrada1 = $('div.geral div.entrada1')
    const entrada2 = $('div.geral div.entrada2')
    const verde2 = $('div.animation-1 div.verde2')
    const p1 = $('div.animation-1 p')
    const animation1 = $('div.animation-1')

    //Entrada1
    entrada1.on('animationend',function(){
        $(this).hide()
        entrada2.css('display', 'block')
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
})