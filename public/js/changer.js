$(document).ready(function(){
  var chat_text = "Here is some text";
  var text_arr = chat_text.split('');
  console.log(text_arr);
  $("#play").on('click', function(){

    var color_changer = function(index){
      var hue = Math.floor(Math.random() * 360);
      var pastel = 'hsl(' + hue + ', 100%, 87.5%)';
      document.body.style.backgroundColor = pastel;
    }

    var i = 0, l = text_arr.length;
      (function iterator() {
      console.log(text_arr[i]);
        color_changer(i);

      if(++i<text_arr.length) {
          setTimeout(iterator, 1000);
      }
    })();


  });

});