/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// app.post("/tweets")
$(document).ready(function () {
  const renderTweets = function (arrOfTweets) {
    //Clear feed on refresh or initial load
    console.log(arrOfTweets);

    $(".tweets-container").empty();

    //Loop through tweets array and send them to be formatted with html
    for (let tweet of arrOfTweets) {
      let value = createTweetElement(tweet);
      $(".tweets-container").prepend(value);
    }
  };

  //Formats tweet data into html
  const createTweetElement = function (tweet) {
    if (!tweet.user || !tweet.user.avatars) {
      console.error("Invalid tweet object:", tweet);
      return null;
    }

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
            ${timeago.format(tweet.created_at)}
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

  const loadNewTweet = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
    })
      .then(function (data) {
        renderTweets(data);
      })
      .catch(function (error) {
        console.log(error);
        alert("An error occurred while loading tweets.");
      });
  };

  $("form").submit(function (event) {
    event.preventDefault();

    const formData = $(this).serialize();
    const tweetContent = formData.split("=")[1];

    if (tweetContent.trim() === "") {
      alert("Tweets can not be empty.");
    } else if (tweetContent.length > 140) {
      alert("Tweet is over character limit.");
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: formData,
      })
        .then(function (response) {
          loadNewTweet(response);

          // clear the tweet input field
          $("textarea").val("");
        })
        .catch(function (error) {
          console.log(error);
          alert("An error occurred while submitting the form.");
        });
    }
  });
});
