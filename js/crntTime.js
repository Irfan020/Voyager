var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("crnttime").innerHTML = d.toLocaleTimeString();
}