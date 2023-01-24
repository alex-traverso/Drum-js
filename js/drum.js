/// FUNCION SONIDOS CON CLICK ///
/// DETECTING BUTTON PRESS ///
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}


/// DETECTING KEYBOARD PRESS ///

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key) {
    
    switch (key) {
            case "w":
                document.querySelector(".tom-1").play();
            break;

            case "a":
                document.querySelector(".tom-2").play();
            break;
            
            case "s":
                document.querySelector(".tom-3").play();
            break;

            case "d":
                document.querySelector(".tom-4").play();
            break;

            case "j":
                document.querySelector(".snare").play();
            break;

            case "k":
                document.querySelector(".crash").play();
            break;
            
            case "l":
                document.querySelector(".kick-bass").play();
            break;

        default:
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
    }


/// CAMBIAR COLOR DE LETRA A BLANCO CON CLASE DE CSS (PONERLO DENTRO DE LA FUNCION DE DRUMS)///
        /* this.classList.toggle("white"); */
        /* console.log(this.innerHTML); */

        ///INSERTAR AUDIO EN JS ///
        /*  let audio = new Audio("sounds/crash.mp3");
            audio.play(); */



/// CALCULADORA ///
/* function sumar(num1, num2) {
    return num1 + num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function restar(num1, num2) {
    return num1 - num2;
}

function dividir(num1, num2) {
    return num1 / num2;
}

function calculadora(num1, num2, operador) {
    return operador(num1, num2);
}


calculadora(4, 5, dividir);
 */


/* let houseKeeper = {
    nombre : "Roberta",
    edad : 22,
    trabajos : 2,
    idiomas : ["ingles", "español"]
} */

/* console.log(houseKeeper.nombre); */



/// CREACION DE OBJETO CONSTRUCTOR ///
/* function HouseKeeper(nombre, edad, trabajos, idiomas) {
    this.nombre = nombre;
    this.edad = edad;
    this.trabajos = trabajos;
    this.idiomas = idiomas;
    this.limpiar = function () {
        alert("Lipieza en curso");
    };
} */
    
    /// CREACION DE OBJETOS A PARTIR DEL CONSTRUCTOR ///
    /* let houseKeeper1 = new HouseKeeper("Roberta", 22, 2, ["ingles", "español"]);
    let houseKeeper2 = new HouseKeeper("Lucia", 25, 1, "español");
    let houseKeeper3 = new HouseKeeper("Jorgelina", 3, 1, "español");
    
    houseKeeper3.limpiar(); */
