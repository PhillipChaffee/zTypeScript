var enemies = new Array(0);
var shooting = false;

setInterval(function() {
  if(enemies.indexOf(ig.game.entities[0]) === -1
    && ig.game.entities[0] != ig.game.player){
    enemies.push(ig.game.entities[0]);
  }
}, 1);

setInterval(function(){
  if(shooting === false && enemies.length){
    shooting = true;
    for(var i = 0; i < enemies.length; i++){
      for(var j = 0; j < enemies[i].word.length; j++){
        ig.game.shoot(enemies[i].word[j]);
      }
      enemies.splice(i, 1);
    }
    shooting = false;
  }
}, 1);
