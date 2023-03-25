/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// app.post("/tweets")
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = function (arrOfTweets) {
  for (let tweet of arrOfTweets) {
    let value = createTweetElement(tweet);
    $(".tweets-container").append(value);
  }
};

const createTweetElement = function (tweet) {
  let $tweet = $(`
    <section class="posted-tweet">
      <article>
        <header>
          <img src="${tweet.user.avatars}">
          <h3>${tweet.user.name}</h3>
          <h4>${tweet.user.handle}</h4>
        </header>
        <p>
          ${tweet.content.text}
        </p>
        <footer>
          ${tweet.user.created_at}
          <div class="icons">
            <i class="fa-solid fa-flag"></i>
            <i class="fa-sharp fa-solid fa-repeat"></i>
            <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    </section>
  `);
  return $tweet;
};

$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();

    const formData = $(this).serialize();

    $.ajax({
      url: "/tweets",
      method: "POST",
      data: formData,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  $(function () {
    $.get("/tweets", function (data) {
      renderTweets(data);
    });
  });
});
