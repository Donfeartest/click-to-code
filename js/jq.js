$("a").click(function(e){
  e.preventDefault();
});

$(document).ready(function() {
        var audioElement = document.getElementById('audio1');
        audioElement.loop = true;
        $('#stop').hide();

        $('#play').click(function() {
        $('#play').hide();
        $('#stop').show();
         audioElement.play();
    });

    $('#stop').click(function() {
        $('#play').show();
        $('#stop').hide();
        audioElement.pause();
    });
});
