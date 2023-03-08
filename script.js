var dado1 = Math.floor(Math.random() * (7-1) + 1);
var dado2 = Math.floor(Math.random() * (7-1) + 1);

var link1 = 'images/dice'+dado1+'.png';
var link2 = 'images/dice'+dado2+'.png';


var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

img1.src = link1;
img2.src = link2;

if(dado1>dado2){
    document.querySelector('.titulo').innerHTML = "Player 1 venceu!"
}
else{
    if(dado1<dado2){
        document.querySelector('.titulo').innerHTML = "Player 2 venceu!"
    }
    else{
        document.querySelector('.titulo').innerHTML = "Empate!"
    }
}

