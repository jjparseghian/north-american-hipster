$(document).ready(function(){
  var color_arr = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green',
  'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 'red',
  'silver', 'teal', 'white', 'yellow'];
  var chat_text = "Here is some text";
  var text_arr = chat_text.split('');
  console.log(text_arr);
  $("#play").on('click', function(){

    // function doSetTimeout(i) {
    //   setTimeout(function() { console.log(i); }, 3000);
    // }

    // for (var i = 0; i < text_arr.length; i++) {
    //   doSetTimeout(i);
    // }

    var color_changer = function(index){
      document.body.style.backgroundColor = color_arr[index];
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