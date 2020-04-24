// Seguir automaticamente
let contador = 0;
document.querySelectorAll('.L3NKy').forEach((item, index) => {
    setTimeout(() => {
		if(!item.classList.contains('_8A5w5')){
        	item.click();
        	contador++;
			console.log('Seu BOT já seguiu ' + contador + ' pessoa(s)!');
		} else { 
			console.log('Você já segue essa pessoa.');
        };
    }, index * 20000);
});