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

// Deixar de seguir automaticamente
let contador = 0;
document.querySelectorAll('._8A5w5').forEach((item, index) => {
    setTimeout(() => {
        if(item.innerText == 'Seguindo') {
            item.click();
            document.querySelectorAll('.-Cab_').forEach(item => {
                if(item.innerText == 'Deixar de seguir') {
                    item.click();
                    contador++;
                    console.log(`Você deixou de seguir ${contador} pessoa(s)!`)
                }
            })
        } 
    }, index * 10000);
});