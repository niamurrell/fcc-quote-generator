$(document).ready(function() {

  var quote;
  var author;

  function replaceQuote() {
    $.ajax({
      url: 'http://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        format: 'jsonp',
        lang: 'en',
      },
      success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        $('#author').text(author);
      }
    });
  }
  replaceQuote();

  $('.button').on('click', function(event) {
    event.preventDefault();
    replaceQuote();
  });

  $('#tweet').on('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote))
  });
});
