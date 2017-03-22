$(document).ready(init);

var currentSection = null;
function init(){
    currentSection=$('#secInicio');
    //console.log(currentSection = $('#secInicio'));
    $('#inicio').click(navegaInicio);
    $('#sobre-mi').click(navegaSobreMi);
    $('#habilidades').click(navegaHabilidades);
    $('#proyectos').click(navegaProyectos);
    $('#contactame').click(naveContactame);
}
//navegar a seciones
function navegaInicio(){
    gotoSection('secInicio');
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