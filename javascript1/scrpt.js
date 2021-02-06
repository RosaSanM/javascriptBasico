//Parte de nombres
let nombre = "Rosa";
let apellido = "Sanchez";

console.log("hola mundo!");
alert("Me llamo "+nombre+"!");

//Segunda de sumar números
let numero1 = 3;
let numero2 = 5;

console.log("La suma de " + numero1 + " y "+numero2 + " es: " + (numero1+numero2));

//Parte de nota examen
let nota = 6;
let aprobado = 5;

if(nota >= aprobado){
    alert("Enhorabuena, aprobaste!");
}else{
    alert("Ooooh, qué pena..Has de seguir estudiando.");
}

//Parte del coche
let colores = ["verd","blau"];
let color = "color";
let i = 0;
let x = 0;
let o = "o";
let u = "u";
let resultado = "";

for(i; i < colores.length; i++){
    console.log("El cotxe es de "+ color +" "+ colores[i]);
}

for(x; x< color.length; x++){
    if(color[x]==o){
        resultado += u;
    }else{
        resultado += color[x];
    }

}
console.log("El cotxe es de "+ resultado +" "+ colores[1]);

//Parte de listado
let lista = ["taula","cadira","ordinador","llibreta"];
let z = 0;

for(z; z<lista.length; z++){
    console.log("L'objecte "+ lista[z]+ " esta a la posició "+ z);
}


//Calculadora
//
var suma = false;
var resta = false;
var multi = false;
var divi = false;
var num1;
var num2;

function operacion(value){

   switch(value){
        case "+":
            suma = true;
            break;
        case "-":
            resta = true;
            break;
        case "*":
            multi =  true ;
            break;
        case "/":
            divi = true;
            break;
        default:
            operador = "Hay algún dato erroneo";                
    }
    
}



function calcular(){ 
    
   num1 = parseFloat(document.getElementById("num1").value);
   num2 = parseFloat(document.getElementById("num2").value);
    
   if(suma){
       resultado = num1+num2;
   }else if(resta){
       resultado = num1-num2;
   }else if(multi){
       resultado = num1*num2;
   }else if(divi){
       resultado = num1/num2;
   }
   console.log(resultado);
   //limpiamos los campos
   document.getElementById("num1").value = " ";
   document.getElementById("num2").value = " ";
   document.getElementById("resultado").value = resultado;
}