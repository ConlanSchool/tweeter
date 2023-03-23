//Tweet hover
$(document).ready(function () {
  $(".posted-tweet").hover(
    function () {
      $(this).css("box-shadow", "0 4px 10px rgba(0, 0, 0, 0.5)");
    },
    function () {
      $(this).css("box-shadow", "none");
    }
  );
});

//Icon hover
$(document).ready(function () {
  $(".fa-solid.fa-flag").hover(
    function () {
      $(this).css("color", "gold");
    },
    function () {
      $(this).css("color", "");
    }
  );
});

$(document).ready(function () {
  $(".fa-sharp.fa-solid.fa-repeat").hover(
    function () {
      $(this).css("color", "gold");
    },
    function () {
      $(this).css("color", "");
    }
  );
});

$(document).ready(function () {
  $(".fa-solid.fa-heart").hover(
    function () {
      $(this).css("color", "gold");
    },
    function () {
      $(this).css("color", "");
    }
  );
});
