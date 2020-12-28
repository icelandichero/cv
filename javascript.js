src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function mobileFunction() {
  var x = document.getElementById("mobile-links");
  var y = document.getElementById("top");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.boxShadow = "0 1px 2px 1px black";
  } else {
    x.style.display = "block";
    y.style.boxShadow = "0 10px 10px 10px white";
  }
}

w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
var targetWidth = 680;
var z = document.getElementById("menuButton");

$(document).ready(function() {
    // This will fire when document is ready:
    $(window).resize(function() {
        // This will fire each time the window is resized:
        if($(window).width() >= 680) {
            // if larger or equal
            z.style.display = "none";
        } else {
            // if smaller
            z.style.display = "block";
        }
    }).resize(); // This will simulate a resize to trigger the initial run.
});
