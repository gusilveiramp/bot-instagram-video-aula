// Curtir automaticamente
const next = document.querySelector('a.coreSpriteRightPaginationArrow');
var counter = 0;

function doLike() {
  const like_btn = document.querySelector('article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button');
  if(like_btn){
      console.log('click\n');
      like_btn.click();
      counter++;
  }
  next.click();
  console.log(`Você já curtiu ${counter} post(s)!`);
}


//caso haja janela de atenção por "Problemas" ocasionados por excesso de likes
function relatar() {
  const relatar = document.querySelector('div._1XyCr > div.piCib > div.mt3GC > button.aOOlW.bIiDR');
  if(relatar){
      console.log('click relatar\n');
      relatar.click();
  }
}

(function loop() {
    setTimeout(() => {
      relatar();
      doLike();
      loop();  
    }, 10000); // 10 segundos
}());



