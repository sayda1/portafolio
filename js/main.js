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
    
    $('#secContactame').hide(1800);
    $('#secProyectos').hide(1800);
    $('#secHabilidades').hide(1800);
    $('#sobreMi').hide(1800);
    $('#secInicio').show(1800);
    
}
function navegaSobreMi(){
    $('#secContactame').hide(1800);
    $('#secProyectos').hide(1800);
    $('#secHabilidades').hide(1800);
    $('#secInicio').hide(1800);
    $('#sobreMi').show(1850);
}
function navegaHabilidades(){
    $('#secContactame').hide(1800);
    $('#secProyectos').hide(1800);
    $('#secHabilidades').show(1800);
    $('#secInicio').hide(1800);
    $('#sobreMi').hide(1850);
}
function navegaProyectos(){
    $('#secContactame').hide(1800);
    $('#secProyectos').show(1800);
    $('#secHabilidades').hide(1800);
    $('#secInicio').hide(1800);
    $('#sobreMi').hide(1850);
}
function naveContactame(){
    $('#secContactame').show(1800);
    $('#secProyectos').hide(1800);
    $('#secHabilidades').hide(1800);
    $('#secInicio').hide(1800);
    $('#sobreMi').hide(1850);
}