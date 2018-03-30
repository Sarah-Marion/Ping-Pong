// business logic or backend
var answer = "";
var theResult = [];

var condition = function (number) {
  if (number % 15 === 0) {
    answer = "PingPong";
  } else if (number % 5 === 0) {
    answer = "Pong";
  } else if (number % 3 === 0) {
    answer = "Ping";
  } else answer = number;
  return answer;
}

//user input

$(document).ready(function () {
  //var userInput = parseInt(prompt("Enter number of tries:  "))
  $(".ping-pong").submit(function (event) {
    event.preventDefault();
    $("ul").empty();
    var userInput = $("#user-input").val();

    for (index = 1; index <= userInput; index++) {
      theResult = condition(index);
      $("ul").append("<li>" + theResult + "</li>");
    }
  });
  // $("#submit").click(function(){
  //   ()
  // });
  var effectsJumbo = function () {
    if ($("#top-heading").offset().top > 40) {
      $("#top-heading").addClass("jumbotron-transparent");
    } else {
      $("#top-heading").removeClass("jumbotron-transparent");
    }
  }
  effectsJumbo();
  // Make the jumbotron transparent when scrolling
  $(window).scroll(effectsJumbo);
});