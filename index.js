// Seguir automaticamente
let seguindo = 0;
document.querySelectorAll('.L3NKy').forEach((item, index) => {
    setTimeout(() => {
		if(!item.classList.contains('_8A5w5')){
        	item.click();
        	seguindo++;
			console.log('Seu BOT já seguiu ' + seguindo + ' pessoa(s)!');
		} else { 
			console.log('Você já segue essa pessoa.');
        };
    }, index * 20000)
});

// Deixar de seguir automaticamente
let contador = 0;
document.querySelectorAll('._8A5w5').forEach((v, i) => {
    setTimeout(() => {
        if(v.innerText == 'Seguindo') {
            v.click();
            document.querySelectorAll('.-Cab_').forEach((val, index) => {
                if(val.innerText == 'Deixar de seguir') {
                    val.click();
                    console.log(`Você deixou de seguir ${contador} pessoa(s)!`)
                }
            })
        } 
    }, i * 10000)
})
