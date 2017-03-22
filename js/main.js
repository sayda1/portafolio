$(document).ready(init);

var currentSection = null;
function init(){
    currentSection=$('#secInicio');
    //console.log(currentSection = $('#secInicio'));
    $('#menu').click(desplegarMenu);
    $('#inicio').click(navegaInicio);
    $('#sobre-mi').click(navegaSobreMi);
    $('#habilidades').click(navegaHabilidades);
    $('#proyectos').click(navegaProyectos);
    $('#contactame').click(naveContactame);
}
//navegar a seciones
function desplegarMenu(){
    $('#secInicio').hide(1000);
    $('#sobreMi').hide(1000);
    $('#secHabilidades').hide(1000);
    $('#secProyectos').hide(1000);
    $('#secContactame').hide(1000);
   $('#menu-desplegar').show(1000);
}
function navegaInicio(){
   $('#menu-desplegar').hide(1000);
   $('#secInicio').show(1000);
}
function navegaSobreMi(){
    gotoSection('sobreMi');
}
function navegaHabilidades(){
    gotoSection('secHabilidades');
}
function navegaProyectos(){
    gotoSection('secProyectos');
}
function naveContactame(){
    gotoSection('secContactame');
}
function gotoSection(_identificadorDeSeccion) {
	currentSection.removeClass('visible');
	var nextSection = $('#' + _identificadorDeSeccion);

	nextSection.addClass('visible');
    console.log(nextSection);
}