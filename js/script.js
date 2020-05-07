$(document).ready(function () {
    $("#submit").click(function () {
      var text = $('input[type="text"]').val();
      if (text !== undefined && text.length !== 0) {
        $('#tasks').prepend('<p>' + text + '</p>');
      }
    });
  });