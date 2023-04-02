//style and color css for posted tweets
$(document).ready(function () {
  $(document).on("mouseenter", ".posted-tweet", function () {
    $(this).css("box-shadow", "0 4px 10px rgba(0, 0, 0, 0.5)");
  });
  $(document).on("mouseleave", ".posted-tweet", function () {
    $(this).css("box-shadow", "none");
  });

  $(document).on("mouseenter", ".fa-solid.fa-flag", function () {
    $(this).css("color", "gold");
  });
  $(document).on("mouseleave", ".fa-solid.fa-flag", function () {
    $(this).css("color", "");
  });

  $(document).on("mouseenter", ".fa-sharp.fa-solid.fa-repeat", function () {
    $(this).css("color", "gold");
  });
  $(document).on("mouseleave", ".fa-sharp.fa-solid.fa-repeat", function () {
    $(this).css("color", "");
  });

  $(document).on("mouseenter", ".fa-solid.fa-heart", function () {
    $(this).css("color", "gold");
  });
  $(document).on("mouseleave", ".fa-solid.fa-heart", function () {
    $(this).css("color", "");
  });
});
