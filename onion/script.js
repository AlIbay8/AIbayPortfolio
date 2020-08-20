var i = 0;
var txt;
var speed;
var line = 0;
$(".login").hide();
var userVal = 0;
var passVal = 0;

$(document).ready(function(){
  ready();
  autoScroll();
});

mydata = {
  "data": [
    "ReleaseBuild patch data refresh...",
    "users base message data update.BBL",
    "!!!Corruption Occurred: errorcode3370dhs!!!",
    "CorruptData {Emma_M_Discourse} sendlog",
    "CorruptData {Coda_R_Discourse} sendlog",
    "CorruptData {Will_P_Discourse_PN} sendlog",
    "CorruptData {Dave_W_Discourse_PN} sendlog",
    "AI_key_data corrupted",
    "ResetIndex:",
    "[356,01055f],",
    "[56565e,500]",
    "var node:Node = new Node(Graph.Graph.getUsersStates(), new Vector3D(nodes[a][0],nodes[a][1]));",
    " import Graph.NavMesh; Send #45States",
    "UPD[ FunctionSet(SPT[BBL])",
    "SPT[NCN].blockContent();",
    "Control Beh: scn DATA analyze = MissingScript.CastGenerated",
    "User_3345>сщккгзеув>actionZone ConnectionDetected",
    "MissingNo((nd!=source)&&(SPT[nd]!=null))",
    "User_53675>DATAControl$$=framePasingIsStillFCKngLow",
    "Attack mode==initiation, messageAnalyzeActivation>Censor",
    "LearnData SetActive",
    "!!!Corruption Occurred: errorcode3370dhs!!!",
    "!!!Corruption Occurred: errorcode533!!!",
    "!!!Corruption Occurred: errorcode3-dd!!!",
    "Corruption AIDamping value=increase by 35",
    "AttackResults Corrupted. DataRecieve Failed",
    "AIControlAttemptInitiation=Failed",
    "Corruption AIDamping value=increase by 10",
    "DataResult=Sending_to_central_AI_Database",
    "DataRead=Failed",
    "varCorrupted = restart.BB:",
    "cost2Node[edge.getTo()]= nCost;",
    "predict = msg.BBL();",
    "CallServer Array=LearData",
    "public class?>Failed/CrashLog",
    "User_00537>Detected>AI Dumping Start at 25",
    "AI_Server>Update_PrepareDataToArchive",
    "FailedAttempt. Data analyze false",
    "MainPredictData>Recompile",
    "MessageData>Failed",
    "MainFrameDelta=restart>NeuralNetworkDataRecycle=Failed",
    "DataIndex=unknown",
    "Warning AI altRoute appeared", 
    "AI Damping Activation",
    "MissingScriptsFound=2"
  ]
}

function ready() {
  write(mydata.data[line], 10);
  if (line === mydata.data.length-1) {
    line = 0;
    $(".history").hide();
    $(".login").show();
  }
}

function write(text, delay) {
  if (i === 0) {
    txt = text;
    if (delay !== 0) {
      speed = delay;
    } else {
      speed = 50;
    }
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

function autoScroll() {
  if (window.pageYOffset !== document.body.scrollHeight) {
    window.scrollBy(0,document.body.scrollHeight);
    scrolldelay = setTimeout(autoScroll,10);
  }
}

$(document).keypress(function(key) {
  if ($(".user").is(":focus")) {
    var user = ["30","307","30769","30769","307695","307695","307695500","30769550020","3076955002099","307695500209946","307695500209946635"];
    $(".user").val("");
    //$(".user").val(user[userVal]);
    if (userVal < user.length) {
      userVal++;
    }
  }
});