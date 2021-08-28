// #region Initialize
var i = 0;
var txt;
var speed;
var speedMultiplier = 1;
var line = 0;
$("document").select();
$(".input").hide();
$("#user-input").blur();
var room = "";
var speech;
var bossDoor = "closed";
var bossAttempts = 0;
var gate = "closed";
var counter = 0;
// #endregion

// #region Actions
var tags = {
  actions: {
    look: {Keys: ["look", "look at", "see", "inspect", "observe", "read"],Tag: false},
    go: {Keys: ["go", "walk", "step", "move", "jump"],Tag: false},
    interact: {Keys: ["push", "touch", "feel", "turn", "switch", "press", "pull", "flip","flick"],Tag: false},
    open: {Keys: ["open"],Tag: false},
    close: {Keys: ["close"],Tag: false}
  },
  subjects: {
    left: {Keys: ["left"],Tag: false},
    right: {Keys: ["right"],Tag: false},
    forward: {Keys: ["forward", "straight"],Tag: false},
    backward: {Keys: ["backward", "back"],Tag: false},
    up: {Keys: ["up", "upstairs", "upwards"],Tag: false},
    down: {Keys: ["down", "downstairs", "downwards"],Tag: false},
    door: {Keys: ["door", "out"],Tag: false},
    red: {Keys: ["red"],Tag: false},
    blue: {Keys: ["blue"],Tag: false},
    around: {Keys: ["around", "stuff", "thing"],Tag: false},
    on: {Keys: [" on"],Tag: false},
    off: {Keys: ["off"],Tag: false},
    button: {Keys: ["button"],Tag: false}
  }
}

/*
var look = {
  Keys: ["look", "look at", "see", "inspect", "observe", "read"],
  Tag: false
}
var go = {
  Keys: ["go", "walk", "step", "move", "jump"],
  Tag: false
}
var interact = {
  Keys: ["push", "touch", "feel", "turn", "switch", "press", "pull", "flip", "flick"],
  Tag: false
}
var open = {
  Keys: ["open"],
  Tag: false
}
var close = {
  Keys: ["close"],
  Tag: false
}

var action = [look, go, interact, open, close];
*/
// #endregion

// #region Subjects
/*
var left = {
  Keys: ["left"],
  Tag: false
}
var right = {
  Keys: ["right"],
  Tag: false
}
var forward = {
  Keys: ["forward", "straight"],
  Tag: false
}
var backward = {
  Keys: ["backward", "back"],
  Tag: false
}
var up = {
  Keys: ["up", "upstairs", "upwards"],
  Tag: false
}
var down = {
  Keys: ["down", "downstairs", "downwards"],
  Tag: false
}
var door = {
  Keys: ["door", "out"],
  Tag: false
}
var red = {
  Keys: ["red"],
  Tag: false
}
var blue = {
  Keys: ["blue"],
  Tag: false
}
var around = {
  Keys: ["around"],
  Tag: false
}
var on = {
  Keys: [" on"],
  Tag: false
}
var off = {
  Keys: ["off"],
  Tag: false
}
var button = {
  Keys: ["button"],
  Tag: false
}

var subject = [left, right, forward, backward, up, down, door, red, blue, around, on, off, button];
*/
// #endregion

/*
var tag = [look, go, interact, open, close, left, right, forward, backward, up, down, red, blue, door,around, on, off, button];
*/

// #region Tag System
$(document).ready(function() {
  if (line === 0) {
    repeat(greetings);
  }
  
  $(document).keypress(function(key) {
    clearInterval(interval);
    if (key.which === 13 && $("#user-input").is(":focus") && i === 0) {
      var cmnd = $("#user-input").val().toLowerCase();

      if (cmnd !== "") {
        tagSystem(cmnd);

        /*
        action.forEach(function(obj) {
          obj["Keys"].forEach(function(keyword) {
            if (cmnd.includes(keyword)) {
              obj["Tag"] = true;
              console.log(obj);
            }
          });
        });

        subject.forEach(function(obj) {
          obj["Keys"].forEach(function(keyword) {
            if (cmnd.includes(keyword)) {
              obj["Tag"] = true;
              console.log(obj);
            }
          });
        });
        */

        if (room !== "") {
          check();
        }
        switchState();

        tagClear();
        /*
        tag.forEach(function(obj) {
          obj.Tag = false;
        });
        */

        $("#user-input").val("");
      }
    }

    if (key.which === 120 && !($("#user-input").is(":focus"))) {
      speed = 0.01;
    } else {
      speed = 50;
    }
  });
});
// #endregion

function tagSystem(input) {
  for (var key in tags) {
    for (var key1 in tags[key]) {
      tags[key][key1]["Keys"].forEach(function(keyword) {
        if (input.includes(keyword)) {
          tags[key][key1]["Tag"] = true;
          console.log(tags[key][key1]);
        }
      });
    }
  }
}

function tagClear() {
  for (var key in tags) {
    for (var key1 in tags[key]) {
      tags[key][key1]["Tag"] = false;
    }
  }
}

// #region mobile controls
var interval;
var toggle = 0;
$(document).mousedown(function() {
  if (toggle == 0) {
    interval = setInterval(function() {
      speed = 0.01;
    }, 100)
    toggle = 1;
  } else if (toggle == 1) {
    clearInterval(interval);
    toggle = 0;
  }
});

// #endregion

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
    if (speech == intro) {
      $(".input").show();
      room = "start";
      autoScroll();
      $("#user-input").select();
      speech = undefined;
    } else if (speech == greetings) {
      reset();
    }else if (speech == theEndIsNever) {
      repeat(intro);
    } else if (speech == coward || speech == freedomOutro || speech == mariellaThirteen || speech == countdownSix || speech == powerfulEnd || speech == coldFeetEnd) {
      reset();
    } else if (speech == metalJawsTwo) {
      quitGame();
      $("html").remove();
    } else if (speech == voteOne || speech == voteTwo || speech == voteThree || speech == voteFour || speech == voteFive) {
      room = "leaderboard";
      repeat(leaderboard);
    } else if (speech == voteLB) {
      room = "babyGame";
      repeat(babyGame);
    } else {
      speech = undefined;
    }
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
    $("#user-input").blur();
    $("#user-input").val("");
    setTimeout(type, speed/speedMultiplier);
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

// #region reset function 
function reset() {
  room = "";
  speech = undefined;
  line = 0;
  repeat(theEndIsNever);
}
//#endregion

function quitGame() {
  var quit = confirm("Would you like to quit the game?");
  if (quit == true) {
    $("html").remove();
  } else if (quit == false) {
    quitGame();
  } else {
    $("html").remove();
  }
}