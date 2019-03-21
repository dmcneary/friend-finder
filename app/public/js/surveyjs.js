$('#submitButton').on('click', function(event) {
    event.preventDefault();
    // Gather user inputs
    var userInput = {
        name: $('#userName').val().trim(),
        photo: $('#userPhoto').val().trim(),
        scores:[
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
    };
    $.post('/api/friends', userInput)
      .done(function(data) {
          $('#userMatch').html(data.matchName);
        $("#userMatchImage").attr("src", data.matchImage);

          $('#modal').modal('open');
      });
});