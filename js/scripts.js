// business logic or backend
var answer = "";
var theResult = [];

var condition = function(number) {
  if (number % 15 === 0) {
    answer = "PingPong";
  } else if (number % 5 === 0) {
    answer = "Pong";
  } else if (number % 3 === 0) {
    answer = "Ping";
  } else answer = number;
  return answer;
}
