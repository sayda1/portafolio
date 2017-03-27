$(document).ready(init);

function init(){
    $('#inicio').click(navegaInicio);
    $('#sobre-mi').click(navegaSobreMi);
    $('#habilidades').click(navegaHabilidades);
    $('#proyectos').click(navegaProyectos);
    $('#contactame').click(naveContactame);
    $('h1').addClass('animated infinite pulse');
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
}
function agregaAnimacion(){
    $('#animacion').addClass('animated 0.5 bounceInDown');
}