$(document).ready(function () {
  console.log("Tex!");

  $(".new-tweet form textarea").on("input", function (event) {
    let charCount = 140 - $(this).val().length;
    $(".new-tweet form .counter").text(charCount);

    if (charCount < 0) {
      $(".new-tweet form .counter").css("color", "red");
    } else {
      $(".new-tweet form .counter").css("color", "");
    }
  });
});
