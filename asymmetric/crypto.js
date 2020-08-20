var A  = new Array (35);
  var Chars0 = "................................"; // 0-31
	var Chars1 = " !\"#$%&'()*.,-./0123456789:;<=>?"; //32-63
	var Chars2 = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_"; //64-95
	var Chars3 = "..abcdefghijklmnopqrstuvwxyz{|}~."; //96-127
	var Chars4 = "................................"; //128 - 159
	var Chars5 = "��������������������������������"; //160 - 191
	var Chars6 = "��������������������������������"; //192 - 223
	var Chars7 = "��������������������������������"; //224 - 255
	var all_Chars = Chars0+Chars1+Chars2+Chars3+Chars4+Chars5+Chars6+Chars7;

var seed = 5000;
$("document").ready(function() {
  clear();
})

function clear() {
	$("#public_key").val = "";
	$("#private_key").val = "";
	$("#input").val ="";
	$("#encrypt_key").val = "";
	$("#crypted").val = "";
}

function generate() {
	key1 = Math.floor(Math.random()*seed);
	$("#public_key").val(key1);
	$("#private_key").val(seed-key1);
}

function encrypt() {
  var crypted = "";
	len = $("#input").val().length;
  console.log(len);
	message = $("#input").val();
  console.log(message);
	key = parseInt($("#encrypt_key").val());
  console.log(key);

	$("#crypted").val("");
	for (n=0;n<len;n++) {
	  A[n] = message.charCodeAt(n);
    console.log(A[n]);
    for (j=0;j<key;j++){
	    A[n]++; 
    }
    //document.myform.crypted.value += " ";
	 crypted += A[n] + " ";
   $("#crypted").val(crypted);
  }
}

function decrypt() {
  //prepare enrypted message
  var prepA = $("#crypted").val().split(" "); // maybe this fixes decrypt problem????
  A = [];
  prepA.forEach(function(four) {
    A.push(parseInt(four));
  })
  
  var decrypted = "";
  console.log("decrypt");
  var int = parseInt($("#decrypt_key").val());
	key = int - seed;
  console.log(key);
  if (($("#length").val() != "")) {
    len = parseInt($("#length").val());
  } else if (($("#input").val() != "")) {
    len = $("#input").val().length;
  } else {
    len = A.length;
  }
  console.log(len);


	$("#decrypted").val("");

  for (i=0;i<len;i++) {
    decrypt_value = (A[i]+key)%seed;
    decrypted += all_Chars.charAt(decrypt_value);
    $("#decrypted").val(decrypted);
	}
}