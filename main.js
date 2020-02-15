window.onload = function(){
	var n = 0;
        var test = true;
	
	do {
          test = true;
          n = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", 5);
	  if ( n == null || n == "" || n > 25 || n < 0 ) {
	    test = false;
	  }	
	}
	while (test == false);	

        console.log('N= ', n);
        console.log('Voici la pyramide :');
	var i;
        ligne = '';
	for (i = 0; i < n; i++) {
	  ligne = ligne + '#';
          console.log(ligne);
              
        } 
}
