$(document).ready(init);

function init(){
    $('#inicio').click(navegaInicio);
    $('#sobre-mi').click(navegaSobreMi);
    $('#habilidades').click(navegaHabilidades);
    $('#proyectos').click(navegaProyectos);
    $('#contactame').click(naveContactame);
   
}
//navegar a seciones
function navegaInicio(){
    $('#secContactame').hide(1000);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').hide(1000);
    $('#sobreMi').hide(1000);
    $('#secInicio').show(1800);
}
function navegaSobreMi(){
    $('#secContactame').hide(1000);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').hide(1000);
    $('#secInicio').hide(1000);
    $('#sobreMi').show(1050);
    agregaAnimacion();
}
function navegaHabilidades(){
    $('#secContactame').hide(1000);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').show(1000);
    $('#secInicio').hide(1000);
    $('#sobreMi').hide(1050);
}
function navegaProyectos(){
    $('#secContactame').hide(1000);
    $('#secProyectos').show(1800);
    $('#secHabilidades').hide(1000);
    $('#secInicio').hide(100);
    $('#sobreMi').hide(1050);
}
function naveContactame(){
    $('#secContactame').show(1800);
    $('#secProyectos').hide(1000);
    $('#secHabilidades').hide(1000);
    $('#secInicio').hide(1000);
    $('#sobreMi').hide(1050);
    $('.fondoContactame').addClass('animated infinite pulse');
}
document.addEventListener('DOMContentLoaded',function(event){ 
    var dataText = ["Sayda Quintanilla","Sayda Quintanilla","Sayda Quintanilla","Sayda Quintanilla"];
 function typeWriter(text, i, fnCallback){ 
 if (i < (text.length)) {
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>'; setTimeout(function() {
        typeWriter(text, i + 1, fnCallback) }, 100); } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700); 
     } 
 } 
 function StartTextAnimation(i) { if (typeof dataText[i] == 'undefined'){setTimeout(function() { StartTextAnimation(0); }, 20000); } if (i < dataText[i].length) { typeWriter(dataText[i], 0, function(){ StartTextAnimation(i + 1); }); } } StartTextAnimation(0); });