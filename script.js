

$(document).ready(function(){
    //Audio element
    var audioElement = document.createElement('audio')
    audioElement.setAttribute('src', 'https://www.soundjay.com/nature/sounds/rain-01.mp3')

    const relax = $('.relax-audio');
    const audio = $('.svg--audio');
    var audioBarr = document.querySelectorAll('.svg--audio path');
    console.log(audioBarr);

    audio.click(function(){
        $(this).hasClass('clicked')?
        ($(this).removeClass('clicked'),
        audioElement.pause())
        :
        ($(this).addClass('clicked'),
        audioElement.play(),
        audio.loop = true)
        
    })

    anime({
        targets: audioBarr,
        scaleY: 1.25,
        duration: 150,
        easing: 'easeInOutQuad',
        direction: 'alternate',
        loop: true,
        delay: function(el, i, l) {
            return i * 100;
          }
    })

})