$(document).ready(function(){
    $('div.item-card').click(function(event){
        var target = $(this);
        $(this).addClass('view1');
        $(this).removeClass('view2');

        $('div.geral').css('height', '100%')
    })
})