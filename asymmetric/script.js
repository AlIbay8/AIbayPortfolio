var A  = new Array (35);
  var Chars0 = "................................"; // 0-31
	var Chars1 = ' !"#$%&.()*.,-./0123456789:;<=>?'; //32-63
	var Chars2 = "@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_"; //64-95
	var Chars3 = "..abcdefghijklmnopqrstuvwxyz{|}~."; //96-127
	var Chars4 = "................................"; //128 - 159
	var Chars5 = "��������������������������������"; //160 - 191
	var Chars6 = "��������������������������������"; //192 - 223
	var Chars7 = "��������������������������������"; //224 - 255
	var all_Chars = Chars0+Chars1+Chars2+Chars3+Chars4+Chars5+Chars6+Chars7;

function clear() {
	document.gen_form.public_key.value ="";
	document.gen_form.private_key.value= "";
	document.myform.input.value="";
	document.myform.encrypt_key.value = "";
	document.myform.crypted.value="";
}

function generate() {
	key1 = Math.floor(Math.random()*5000);
	document.gen_form.public_key.value = key1;
	document.gen_form.private_key.value = 5000 - key1;
}

		
function encrypt() {
	len = document.myform.input.value.length;
	message = document.myform.input.value;
	key = document.myform.encrypt_key.value;

	document.myform.crypted.value="";
	for (n=0;n<len;n++) {
	  A[n] =  message.charCodeAt(n);
    for (j=0;j<key;j++){
	    A[n] ++; 
    }
    //document.myform.crypted.value += " ";
	 document.myform.crypted.value += A[n];
  }
}

function decrypt() {
  var decrypted = "";
  console.log("decrypt");
  var int = parseInt($(".decrypt_key").val());
	key = int - 5000;
  console.log(key);
	len = $(".input").val().length;
  console.log(len);
	$(".decrypted").val = "";

  for (i=0;i<len;i++) {
    decrypt_value = (A[i]+key)%5000;
    decrypted += all_Chars.charAt(decrypt_value);
    $(".decrypted").val(decrypted);
	}
}