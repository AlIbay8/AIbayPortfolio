// #region Initialize
var i = 0;
var txt;
var speed;
var line = 0;
$("document").select();
$(".input").hide();
var room = "";
var speech;

// #region Tag System
$(document).ready(function() {
  if (line === 0) {
    repeat(data);
  }
});
// #endregion

var data = {
  "lines": [
    "Currently in Development!",
    "   "
  ],
  speed: [58, 500]
}

// #region repeating lines functions
function repeat(script) {
  if (i === 0) {
    speech = script;
    ready();
  }
}

function ready() {
  if (line >= speech.lines.length) {
    line = 0;
    if (speech == data) {
      console.log("test");
      $("#output").append("<p>If you are here for the beta, access it <a href='https://4rt1f1c1al.itch.io/tspta' target='blank'>here!</a></p>");
    }
    speech = undefined;
  } else {
    write(speech.lines[line], speech.speed[line]);
  }
}
// #endregion

// #region write
function write(text, delay) {
  if (i === 0) {
    txt = text;
    if (delay !== 0) {
      speed = delay;
    } else {
      speed = Math.floor(Math.random()*70) + 40;
    }
    type();
  }
}
// #endregion

// #region typewriter
function type() {
  if (i < txt.length) {
    document.getElementById("output").innerHTML += txt.charAt(i);
    i++;
    autoScroll();
    setTimeout(type, speed);
  } else {
    $(".history").append("<p>" + $('#output').text() + "</p>");
    $("#output").empty();
    i = 0;
    txt = "";
    if (speech != undefined) {
      line++;
      ready();
    } else {
      line = 0;
      $("#user-input").select();
    }
    $("#user-input").select();
  }
}
// #endregion

// #region Auto Scroll
function autoScroll() {
  if (window.pageYOffset !== document.body.scrollHeight) {
    window.scrollBy(0,document.body.scrollHeight+500);
  }
}
// #endregion

// #region Switch Statement (Intial Room Dialogue)
function switchState() {
  
}
// #endregion

// #region Check Script
function check() {
  
}
// #endregion