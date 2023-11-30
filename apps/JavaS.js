// Obteniendo los botones a través de su ID
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');
var button9 = document.getElementById('button9');

// Definiendo funciones para los botones
button1.addEventListener('click', function() {
    var buttons = document.getElementsByClassName('animatedButton');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== 'button1') {
            buttons[i].style.fontSize = '20px';
            buttons[i].style.backgroundColor = 'gray';
        }
    }
});

button2.addEventListener('click', function() {
    var buttons = [button1, button3, button4, button5, button6, button7, button8, button9];
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].style.color == 'black') {
            buttons[i].style.color = 'white';
        } else {
            buttons[i].style.color = 'black';
        }
    }
});

button3.addEventListener('click', function() {
    var numeros = prompt('Ingrese los números separados por comas');
    var numerosArray = numeros.split(',').map(function(num) {
        return parseInt(num.trim());
    });

    var suma = numerosArray.reduce(function(a, b) {
        return a + b;
    }, 0);

    var promedio = suma / numerosArray.length;

    alert('El promedio es: ' + promedio);
});

button4.addEventListener('click', function() {
    var fonts = ['Arial', 'Verdana', 'Helvetica'];
    var buttons = document.getElementsByClassName('animatedButton');

    for (var i = 0; i < buttons.length; i++) {
        if ((i + 1) % 2 === 0) {
            buttons[i].style.backgroundColor = 'purple';
        }

        buttons[i].style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
    }
});

// Función para restablecer los botones
button5.addEventListener('click', function() {
    var buttons = document.getElementsByClassName('animatedButton');

    // Restablece el estilo de los botones, excepto el botón 6
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.fontSize = '';
        buttons[i].style.backgroundColor = '';
        buttons[i].style.color = '';
        buttons[i].style.fontFamily = '';
    }
});

// Función para redireccionar a un video de introducción a JavaScript en YouTube
button6.addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=ye21CYdhm1s&ab_channel=TutorialesatuAlcance';
});

// Función para mostrar una alerta sobre los números primos
button7.addEventListener('click', function() {
    var numero = parseInt(prompt('Ingrese un número'));

    if (esPrimo(numero)) {
        alert(numero + ' es un número primo');
    } else {
        alert(numero + ' no es un número primo');
    }
});

// Función para contar la cantidad de palabras en un párrafo ingresado
button8.addEventListener('click', function() {
    var parrafo = prompt('Ingrese un párrafo');
    var cantidadPalabras = contarPalabras(parrafo);

    alert('La cantidad de palabras en el párrafo es: ' + cantidadPalabras);
});

// Función para redireccionar a la página "GitHub"
button9.addEventListener('click', function() {
    window.location.href = 'https://github.com';
});

// Función auxiliar para determinar si un número es primo
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

// Función auxiliar para contar la cantidad de palabras en un texto
function contarPalabras(texto) {
    var palabras = texto.split(' ');
    return palabras.filter(function(palabra) {
        return palabra.trim() !== '';
    }).length;
}