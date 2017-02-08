console.log('Loaded!');
/*var textelement=document.getElementById('textid');
textelement.onclick =function()
{
    textelement.style.marginLeft='100px';
};*/
var moverightreal=0;
function moveright()
{
    moverightreal=moverightreal+1;
    textelement.style.marginLeft=moverightreal+'px';
}
var textelement=document.getElementById('textid');
textelement.onclick=function(){
  var move=setInterval(moveright,50);  
};
