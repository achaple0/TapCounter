var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Tap: " + count;
};

var reset = document.getElementById("resetme"),
  count = 0;
reset.onclick = function() {
  count = 0;
  button.innerHTML = "Tap: " + "0";
};