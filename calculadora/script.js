

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
        document.getElementById("operador").innerHTML = "sumando";
        
    }else if(value == "-"){
        num1 = parseInt(document.getElementById("resultado").value);
        resta = true;
        limpiar();
        document.getElementById("operador").innerHTML = "Restando";
    }else if(value == "*"){
        num1 = parseInt(document.getElementById("resultado").value);
        multi = true;
        limpiar();
        document.getElementById("operador").innerHTML = "Multiplicando";
    }else if(value == "/"){
        num1 = parseInt(document.getElementById("resultado").value);
        divi = true;
        limpiar();
        document.getElementById("operador").innerHTML = "Dividiendo";
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
       resultado = num1-num2;
       num1 = parseInt(document.getElementById("resultado").value); 
       resetear();
   }else if(multi){
       num2 = parseInt(document.getElementById("resultado").value);
       resultado = num1*num2;
       num1 = parseInt(document.getElementById("resultado").value);
       resetear();
   }else if(divi){
       num2 = parseInt(document.getElementById("resultado").value);
        if(num2 == 0){
          document.getElementById("operador").innerHTML = "No puedes dividir entre 0 !!";    
          document.getElementById("resultado").value = "";  
        }else{
           resultado = (num1/num2);
           num1 = parseInt(document.getElementById("resultado").value);
           resetear(); 
        }
        
   }
   
   document.getElementById("resultado").value = resultado;
}
//limpiar pantalla
function limpiar(){
    document.getElementById("resultado").value = "";
    document.getElementById("operador").innerHTML = "Operación";
}
//
function resetear(){
    suma  = false;
    resta = false;
    multi = false;
    divi  = false;
    document.getElementById("operador").innerHTML = "Operación";
}