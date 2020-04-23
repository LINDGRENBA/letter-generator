$(document).ready(function() {
  $("#friend-name").submit(function(event) {
    let nameInput = $("#name").val();
    $(".name").text(nameInput);
    $("#letter").show();

    event.preventDefault();
  });
});