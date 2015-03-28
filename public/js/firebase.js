$(document).ready(function() {

 var firebase = new Firebase("https://saysong.firebaseio.com");
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          firebase.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      firebase.on('child_added', function(snapshot) {
        var message = snapshot.val();
displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div class="message row"/>')
          .prepend('<p class="col-lg-7">'+text+'</p>')
          .prepend($('<em class="name col-lg-2 col-lg-offset-1"/>')
          .text(name+': '))
          .append('<i class="fa fa-music col-lg-1"></i>')
          .appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
      // setInterval(function() {firebase.remove()}, 300000)
      setTimeout(function(){
      $('i').on('click', function(){
        console.log($(this).parent('div').children('p').text());
      });
      }, 1000)
});