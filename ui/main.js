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
    textelement.style.marginRight=moverightreal+'px';
}
var textelement=document.getElementById('textid');
textelement.onclick=function(){
  var move=setInterval(moveright,50);  
};
var count=0;
var button=document.getElementById('counter');
button.onclick=function(){
    count=count+1;
    var span=document.getElementById('count');
    span.innerHTML=count.toString();
};