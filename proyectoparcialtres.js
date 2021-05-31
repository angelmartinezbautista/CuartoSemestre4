function limpiarFormulario() {
	document.getElementById("miForm").reset();
}
var por = function (n1,n2){
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);
	porciento = (num1 * 100) / num2;
	return "LOS NÚMEROS INTRODUCIDOS FUERON: " + num1 + " Y " + num2 + " POR LO TANTO EL PORCENTAJE ES IGUAL A: " + porciento; 
}

function limpiarFormulario() {
	document.getElementById("miForm").reset();
}
var den = function (d1,d2){
	var masa = parseFloat(document.getElementById("masa").value);
	var volumen = parseFloat(document.getElementById("volumen").value);
	densidad = masa / volumen;
	return "LA DENSIDAD ES IGUAL A: " + densidad;
}