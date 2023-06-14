function metodoNewton(){
// Obtener los valores de los puntos ingresados
var a = parseInt(document.getElementById("x1").value);
var b = parseInt(document.getElementById("y1").value);
var i = parseInt(document.getElementById("x2").value);
for(var cont=1; cont<=i ;cont++){
	m=(a+b)/2
	var fa=(a**a)-100;
	var fb=(b**b)-100;
	var fm=(m**m)-100;

	if ((fa*fm)<0) {b=m;}
	if ((fm*fb)<0) {a=m;}
	document.write("El nuenvo intervalo es para a: "+a+" y para b: "+b);
	//alert("El nuenvo intervalo es para a: "+a+" y para b: "+b);
}

}