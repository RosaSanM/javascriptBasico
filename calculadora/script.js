

//Calculadora
//
var suma  = false;
var resta = false;
var multi = false;
var divi  = false;
var num1;
var num2;

var uno    = 1;
var dos    = 2;
var tres   = 3;
var cuatro = 4;
var cinco  = 5;
var seis   = 6;
var siete  = 7;
var ocho   = 8;
var nueve  = 9;
var cero   = 0;
//escribimos los valores en pantalla
function marcar(numero){
    document.getElementById("resultado").value += numero;
}

//recogemos primer valor y cálculo que queremos hacer
function operacion(value){

   if(value == "+"){
        num1 = parseInt(document.getElementById("resultado").value);
        suma = true;
        limpiar();
    }else if(value == "-"){
        num1 = parseInt(document.getElementById("resultado").value);
        resta = true;
        limpiar();
    }else if(value == "*"){
        num1 = parseInt(document.getElementById("resultado").value);
        multi = true;
        limpiar();
    }else if(value == "/"){
        num1 = parseInt(document.getElementById("resultado").value);
        divi = true;
        limpiar();
    } 
}

//aquí hacemos el recogemos segundo valor, hacemos cálculo y reseteamos los valores de cálculo 
function calcular(){ 
   if(suma){
       num2 = parseInt(document.getElementById("resultado").value);
       resultado = num1+num2;
       resetear();
   }else if(resta){
       num2 = parseInt(document.getElementById("resultado").value);
       resultado = (num1-num2);
       num1 = parseInt(document.getElementById("resultado").value);
       resetear();
   }else if(multi){
       num2 = parseInt(document.getElementById("resultado").value);
       resultado = num1*num2;
       num1 = parseInt(document.getElementById("resultado").value);
       resetear();
   }else if(divi){
       num2 = parseInt(document.getElementById("resultado").value);
       resultado = num1/num2;
       num1 = parseInt(document.getElementById("resultado").value);
       resetear();
   }
   
   document.getElementById("resultado").value = resultado;
}
//limpiar pantalla
function limpiar(){
    document.getElementById("resultado").value = "";
}
//
function resetear(){
    suma  = false;
    resta = false;
    multi = false;
    divi  = false;
}