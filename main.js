window.onload = function(){
	var n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", 5);

	if (n == null || n == "") {
	  n = 5;
	}
	var i;
	for (i = 0; i < n; i++) {
	  console.log('*');
	} 
}
