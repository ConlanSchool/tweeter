//Character counter
$(document).ready(function () {
  $(".new-tweet form textarea").on("input", function (event) {
    let charCount = 140 - $(this).val().length;
    $(".new-tweet form .counter").text(charCount);

    if (charCount < 0) {
      $(".new-tweet form .counter").css("color", "red");
    } else {
      $(".new-tweet form .counter").css("color", "");
    }
  });

  //resets the counter after tweet is posted
  $(".new-tweet form").on("submit", function (event) {
    $(".new-tweet form .counter").text(140);
    $(".new-tweet form .counter").css("color", "");
  });
});
