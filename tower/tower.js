var i = 0;
var txt;
var speed;
var line = 0;

$(document).ready(function(){
  ready();
});

function ready() {
  if (line === 0) {
    write("Dear Davey,", 50);
  } else if (line === 1) {
    write(" ", 70);
  } else if (line === 2) {
    write("Thank you for your interest in my games. I need to ask you not to speak to me anymore. I wonder at times whether you think I am making these games for you.       ", 70);
  } else if (line === 3) {
    write("You've so infected my personal space that it's possible I did begin to plant 'solutions' in my work somewhere hidden between games.       ", 70);
  } else if (line === 4) {
    write("If there was an answer, a meaning, would it make you any happier?       ", 50);
  } else if (line === 5) {
    write("Would you stop taking my games and showing them to people against my wishes?       ", 60);
  } else if (line === 6) {
    write("Giving them something that is not yours to give? Violating the one boundary that keeps me safe?       ", 70);
  } else if (line === 7) {
    write("Would you stop changing my games? Stop adding lampposts to them?       ", 70);
  } else if (line === 8) {
    write("Would you simply let them be what they are?       ", 80);
  } else if (line === 9) {
    write("When I am around you I feel physically ill.       ", 70)
  } else if (line === 10) {
    write("You desperately need something and I cannot give it to you. I literally do not have it.       ", 60);
  } else if (line === 11) {
    write("Struggling to come up with new ideas is not making me depressed, low points are just a part of the process.       ", 65);
  } else if (line === 12) {
    write("The fact that you think I am frustrated or broken says more about you than about me.       ", 70);
  } else if (line === 13) {
    write("I realize that this doesn't make sense to you just yet.  ", 65);
  } else if (line === 14) {
    write("Which is fine, you're not my problem to solve.", 65);
  } else if (line === 15) {
    write("But I do hope that one day it clicks, and that you make peace with this thing you are wrestling.       ", 70);
  } else if (line === 16) {
    write("And when you finally see what I am talking about:                         ", 65);
  } else if (line === 17) {
    write("don't say anything.", 300);
  }
}

function write(text, delay) {
  if (i === 0) {
    txt = text;
    speed = delay;
    type();
  }
}

function type() {
  if (i < txt.length) {
    document.getElementById("output").innerHTML += txt.charAt(i);
    i++;
    setTimeout(type, speed);
  } else {
    $(".history").append("<p>" + $('#output').text() + "</p>");
    $("#output").empty();
    i = 0;
    txt = "";
    line++;
    ready();
  }
}