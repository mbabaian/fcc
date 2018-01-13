$(document).ready(function() {

  var quote;
  var author;

  function getQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        //test response in console.log 
        //console.log(response.quoteText);
        quote = response.quoteText;
        author = response.quoteAuthor;
        $("#quote").text(quote);
        if (author) {
          $("#author").text(" -- " + author);
        } else {
          $("#author").text(" -- Anonymous");
        }
      }
    });
  }
  getQuote();

  $(".get-quote").on("click", function() {
    event.preventDefault();
    getQuote();
  });
});

$(".tweet-quote").on("click", function() {
  event.preventDefault();
  window.open("https://twitter.com/intent/tweet?text=" + $("#quote").text() + $("#author").text());
});