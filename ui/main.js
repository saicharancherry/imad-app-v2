console.log('Loaded!');
/*var textelement=document.getElementById('textid');
textelement.onclick =function()
{
    textelement.style.marginLeft='100px';
};*/
function moveright()
{
    moverightreal=moverightreal+10;
    textelement.style.marginLeft='moverightreal'+'px';
}
var textelement=document.getElementById('textid');
textelement.onclick=function(){
  var move=setInterval(moveright,100);  
};
