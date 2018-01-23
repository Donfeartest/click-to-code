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

$('#mainclick').one("click", function(){
    $("#previewMsg").hide();
    $("#firstPage").show();
});

$('#nextPage').click(function(){
  $('#firstPage').hide();
  $('#secondPage').show();
});
$('#prevPage').click(function(){
  $('#secondPage').hide();
  $('#firstPage').show();
});


$("a").click(function(e){
  e.preventDefault();
});
});
