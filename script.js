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

    
    
})

function check(){
    $(window).width() <= 960 ? $('div.geral').css('height','fit-content') : console.log("outro")
}
