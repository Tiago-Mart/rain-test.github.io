$(document).ready(function(){
    const priNav = $('nav.primary--nav');
    const linkNav = $('nav.primary--nav div.nav--links')
    const navToggle = $('div.hamburguer--button');

    navToggle.click(function(){
        var visi = priNav.attr("data-visible");
        visi == 'false' ?
        priNav.attr("data-visible", "true")
        :
        priNav.attr("data-visible", 'false');
    })  

})