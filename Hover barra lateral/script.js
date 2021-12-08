$(document).ready(function(){

    var position = $('svg.logo').offset();
    const header = $('section.header');
    $('svg.logo-menu').css(position);

    header.hide();


    
    $('svg.logo-menu').click(function(){
        $('section.header svg.logo').hide()

        header.is(":visible") ?

        (header.addClass('fade-out-menu'), header.removeClass('fade-in-menu'), header.fadeOut(1200)
        )
        :
        (header.removeClass('fade-out-menu'),header.addClass('fade-in-menu'), header.show() )
        
        
    })

    //Aparecer o texto e remover o icone
    $('.item').mouseenter(function(event){
            $(event.target).children('.item-header').css("display", 'none')
            $(event.target).children('.texto-header').css("display", "block")
    })
    
    //Remover o texto e retornar o icone 
    $('.item').mouseleave(function(event){
            $(event.target).children('.texto-header').css("display","none")
            $(event.target).children('.item-header').css("display", 'block');
            $(event.target).children('.item-header').addClass('fade-in-svg');
            
    })

})

