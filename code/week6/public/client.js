// What happens when you pass a function into jQuery?
// It registers the function as an event handler for the document
// DOMContentLoaded event.
// document.addEventListener('DOMContentLoaded', function () {});
// $(document).ready(function () {});
$(function () {

  console.log('DOMContentLoaded has fired');

  $('#button').on('click', function(ev) {
    console.log(ev.offsetX, ev.offsetY);
     // What you're more likely to do, is pass an HTML-like fragment.
     var aList = $('<ol>')
      .appendTo('body')
      .css({
        color: 'red'
      });

    $.getJSON('https://jsonplaceholder.typicode.com/todos',function( data ) {
      $.each( data, function( key, val ) {
        console.log("each data",key,val)
        let newLI = $('<li>')
          .text(val.title)
          .appendTo(aList)
      })
    })
    return false;
  });

  var myH1 = $('h1');
  console.log(myH1[0].innerText);

  myH1.css({
    color: 'blue',
    fontFamily: 'Arial'
  });

 
  // jQuery is all about chaining. That is, most of these helper methods
  // return the collection they were called on.
  $('<h3>').text('this is an h3').appendTo('body');

  // Let's make a link
  $('<a>')
    .attr('href', 'http://api.jquery.com/jquery.ajax/')
    .text('Learn about AJAX here!')
    .appendTo('body')
    .css({
      color: 'red'
    })
    .on('click', function (event) {
      // event.preventDefault();
      console.log("Awesome!");
    });


});
