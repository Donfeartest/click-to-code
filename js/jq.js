$(document).ready(function() {
  $("a").click(function(e){
    e.preventDefault();
  });

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

$('#mainclick').click(function(){
  if(bytecount >= 5){
    $("#previewMsg").hide();
    $("#firstUp").show();
  }
  if(bytecount >= 25){
    $("#secondUp").show();
  }
  if(bytecount >= 125){
    $("#thirdUp").show();
  }
  if(bytecount >= 250){
    $("#fourthUp").show();
  }
  if(bytecount >= 750){
    $("#fifthUp").show();
  }
  if(bytecount >= 1000){
    $("#upgradePC").show();
  }
});

});
