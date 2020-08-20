
var array1 = ["J", "A", "P", "L", "O", "Y", "I", "Z", "D", "E", "H", "T", "M", "N", "W", "Q", "G", "C", "F", "V", "R", "K", "S", "U", "X", "B"];
var array2 = ["W", "E", "X", "J", "P", "V", "L", "Y", "Q", "A", "O", "M", "K", "I", "D", "S", "N", "R", "F", "Z", "U", "C", "G", "B", "T", "H"];
var array3 = ["N", "T", "W", "R", "X", "E", "J", "Z", "F", "I", "B", "O", "Q", "G", "A", "K", "C", "M", "P", "V", "H", "D", "L", "U", "S", "Y"];
var password = "SESSION";
var attempt = "";
var hint = "YXV0dW1uLCB3aW50ZXIsIHN1bW1lciwgYW5kIHNwcmluZyBhcmUgYWxsIF8/";
$(".output").hide();

$("button").click(function() {
  console.log("click");
  password = array1[array2.length - 4] + "" + array2[array1.length - 25] + "" + array3[array2.length - 12] + "" + array1[array3.length - 4] + "" + array2[array2.length - 16] + "" + array3[array1.length - 26] + "" + array1[array3.length - 4];
  attempt = $("input").val();

  if (attempt.includes(password)) {
    console.log("yes");
    password = "given";
    $(".output").append("call alexander on Discord and say '" + array1[25] + "" + array2[9] + "" + array3[0] + "" + array1[1] + "" + array2[16] + "" + array3[14] + array1[22] + ",' and wait for his response.");
    $(".output").show();
  } else {
    console.log("no");
    var kill = confirm("Are you sure you want to kill the page?");
    if (kill === true) {
      $("html").remove();
    } else {
      $("html").remove();
    }
    password = "aSBiZWNvbWUgeW91";
  }
});