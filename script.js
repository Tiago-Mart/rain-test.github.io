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
        var color;
        input.click();
        input.change(function(){
            color = input.val();
            console.log(color)
        })

        
    })

    $('input.normal-button').click(function(){
        $(this).addClass('click');
        $(this).on('animationend', function(){
            $(this).removeClass('click')
        })
    })

    
})

function check(){
    $(window).width() <= 960 ? $('div.geral').css('height','max-content') : console.log("outro")
}
