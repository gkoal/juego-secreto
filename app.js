let randomNumber = 0;
let contadorInten= 0;
let contadorJueg= 1;
let listaJuego = [];
let maxNumber = 10;
let maxPlays = 1;

//llama a la funcion para la primera asignacion del numero
//condiciones de inicio
startmess();

function asignarTextoElemento(elemento, texto){
     //selecciona un elemento del HTML (<h1> en este caso </h1>)
     let elementoHTML = document.querySelector(elemento);
     //llenado de texto en el elemento
     elementoHTML.innerHTML =  texto;
     return 0;
}

//funcion que llama el html para ejecutar 
function verificacionIntenyo() {
     let numeroUsuario = parseInt(document.getElementById('numberusr').value);
      console.log('intento: '+contadorInten);
     if (numeroUsuario == randomNumber) {
          asignarTextoElemento('p', `acertaste el numero ${randomNumber} en ${contadorInten} intento${(contadorInten === 1)?'':'s'}`);
          document.getElementById('reiniciar').removeAttribute('disabled');
          document.getElementById('intento').setAttribute('disabled','true');
     } else  { //No acerto
          asignarTextoElemento('p', (numeroUsuario<randomNumber)? "El numero es mayor": 'El numero es menor'),
          contadorInten++;
          clearBox();
     }
     return;
}
 

function randomNumberge() {
     randomNumber = Math.floor(Math.random()*maxNumber)+1;

     if (contadorJueg == maxPlays) {
          return win();
     } else {
          if (listaJuego.includes(randomNumber)) {
               return randomNumberge();
          } else {
               listaJuego.shift(listaJuego[0]);
               listaJuego.push(randomNumber);
               console.log(listaJuego);
               return randomNumber;  
          }
     }
}

function clearBox () {
     document.querySelector('#numberusr').value = '';

}
function win(){
     asignarTextoElemento('h1','GANASTE!!')
     asignarTextoElemento('p','ya adivinaste todos los numeros')
     document.getElementById('reboot').style.display = 'block';
     document.getElementById('reiniciar').setAttribute('disabled','true');
}
function restart() {
     //reinciar mensajes y contador
     startmess(); 
     document.getElementById('reiniciar').setAttribute('disabled','true');
     document.getElementById('intento').removeAttribute('disabled');
     contadorJueg++;
}

     //asigna el texto a el html
function startmess() {
     asignarTextoElemento('h1','Adivina el numero');
     asignarTextoElemento('p',`Elijen un numero del 1 al ${maxNumber}`);
     contadorInten =parseInt(1);
     randomNumberge();
     console.log('random number ' +randomNumber);
          //limpia caja
     clearBox();
}

function reboot(){
     maxNumber = parseInt(prompt('ingrese el rango de numeros que le gustaria adivinar, uno y cual?'))
     maxPlays = parseInt(prompt('Cuantos juegos le gustaria jugar para llegar a la victoria?'))
     restart();
     console.clear();
}
