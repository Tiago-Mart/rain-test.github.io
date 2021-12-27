$(document).ready(function(){

    var teste = 0;
    var clickDiv = 0;
    //Click fazer mudar a opção de visualização do item-card e quadno clicar em outro item-diferente mudar para a visualização padrão
    $('div.item-card').click(function(event){


        teste != $(event.target).closest('div.item-card').attr('id') || clickDiv == 0 ? 
        (clickDiv++,
        $(this).hasClass('view2') ? console.log() : $(this).addClass('view2'),
        teste != 0? $("#" +teste).removeClass('view2') : console.log()) 
        : 
        (console.log())


        teste = $(event.target).closest('div.item-card').attr('id')
        check()
    })

    $('span#color-span p.info-value').click(function(event){
        var input = $(event.target).closest('span#color-span').children('input#color-choose');
        var marker = $(event.target).closest('div.marker-color')
        var color;
        input.click();
        input.change(function(event){
            color = input.val();
            marker.css('background-color', color);
            
        })

        
    })

    $('input.normal-button').click(function(){
        $(this).addClass('click');
        $(this).on('animationend', function(){
            $(this).removeClass('click')
        })
    })
    const logo = $('div.menu-button')
    const dHeader = $('div.header');
    var itemHeader = $('div.header div.itens-header a');


    //*Mouse enter
    itemHeader.mouseenter(function(event){
        $(event.target).closest('a.item').children('svg.item-header').hide()
        $(event.target).closest('a.item').children('span').show()
    })

    //Mouse leave
    itemHeader.mouseleave(function(event){
        $(event.target).closest('a.item').children('svg.item-header')
            .show()
            .addClass('fade-in-svg')
        
        $(event.target).closest('a.item').children('span').hide()
    })

    //Barra lateral
    logo.click(function(){
        $(this).hasClass('clicado') ?
        $(this).removeClass('clicado')
        :
        $(this).addClass('clicado')
        dHeader.is(':visible') ?
        (   $('div.header div.itens-header').hide(),
            dHeader.css('animation',' header-out 0.75s cubic-bezier(0.215, 0.610, 0.355, 1)'),
            dHeader.on('animationend',function(){
                dHeader.css('animation','')
                $(this).hide()
                $(this).off('animationend')
            })
        )
        :
        (
            dHeader.css('display', 'flex'),    
            dHeader.on('animationend',function(){
                $('div.header div.itens-header').css('display','flex')
                $(this).off('animationend')
            })
        )
    })
    
})

function check(){
    $(window).width() <= 960 ? $('div.geral').css('height','max-content') : console.log("outro")
}
