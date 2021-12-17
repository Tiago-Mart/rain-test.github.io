$(document).ready(function(){
    /*$('div.skill input#teste').click(function(event){
        var skill = $(event.target).closest('div.skill');
        skill.removeClass('not-proficience');
        skill.addClass('proficience')
    })*/

    $('div.skill input#proficiencia').change(function(event){
        var skill = $(event.target).closest('div.skill');
        $(this).prop('checked') == true ? 
        (skill.removeClass('not-proficience'),
        skill.addClass('proficience'))
        :
        (skill.addClass('not-proficience'),
        skill.removeClass('proficience'))
    })
})