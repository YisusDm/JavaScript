//Declaramos variables
var operandoa;
var operandob;
var operacion;
var acum;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');

    //Eventos de click
  uno.onclick = function(e){
    acum=acum+"1";
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    acum=acum+"2";
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    acum=acum+"3";
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    acum=acum+"4";
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    acum=acum+"5";
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    acum=acum+"6";
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    acum=acum+"7";
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    acum=acum+"8";
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    acum=acum+"9";
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    acum=acum+"0";
    resultado.textContent = resultado.textContent  + "0";
}
punto.onclick = function(e){
    acum=acum+".";
    resultado.textContent = resultado.textContent  + ".";
}
reset.onclick = function(e){
    resetear();
}
suma.onclick = function(e){
    operandoa = acum;
    acum="";
    operacion = "+";
    resultado.textContent=resultado.textContent  + operacion;
}
resta.onclick = function(e){
    operandoa = acum;
    acum="";
    operacion = "-";
    resultado.textContent=resultado.textContent  + operacion;
}
multiplicacion.onclick = function(e){
    operandoa = acum;
    acum="";
    operacion = "*";
    resultado.textContent=resultado.textContent  + "x";
}
division.onclick = function(e){
    operandoa = acum;
    acum="";
    operacion = "/";
    resultado.textContent=resultado.textContent  + operacion;
}
igual.onclick = function(e){
    operandob = acum;
    resolver();
}
/*borrar.onclick = function(e){
    acum2=acum.slice(0,-1);
    acum=acum2;
}*/
  }

  
function limpiarpan(){
    resultado.textContent = "";
}
  
function resetear(){
    limpiarpan();
    acum="";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver(){
    limpiarpan();
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    resultado.textContent = res;
}