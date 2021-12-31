

$(document).ready(function(){
    //Audio element
    var audioElement = document.createElement('audio')
    audioElement.setAttribute('src', 'https://www.soundjay.com/nature/sounds/rain-01.mp3')

    const relax = $('.relax-audio');
    const audio = $('.svg--audio');
    var audioBarr = document.querySelectorAll('.svg--audio path');
    console.log(audioBarr);

    //Volume
    const volumeInput = document.getElementById('volume');
    const volumeRange = $('input#volume')
    const volumeText = $('span.value')
    let volumeValue = parseFloat(volumeRange.val())
    changeVolume(volumeValue);

    volumeInput.addEventListener('input', function(){
        var value = (this.value-this.min)/(this.max-this.min)*100
        this.style.background = 'linear-gradient(to right, #4111a6 0%, #4111a6 ' + value + '%, rgba(0,0,0,0.2) ' + value + '%, rgba(0,0,0,0.2) 100%)'
        volumeValue = parseFloat(volumeRange.val())
        changeVolume(volumeValue);
        volumeText.text(Math.round((volumeValue * 100))+'%')
    })

    

    audio.click(function(){
        $(this).hasClass('clicked')?
        ($(this).removeClass('clicked'),
        audioElement.pause())
        :
        ($(this).addClass('clicked'),
        audioElement.play(),
        audioElement.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false))
        
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

    function changeVolume(valVolume) {
        audioElement.volume = valVolume;
    }

})