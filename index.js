// Ej 1

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
      console.log(numero + ' es un número par.');
    } else {
      console.log(numero + ' es un número impar.');
    }
  }

  verificarParImpar(4);

  // Ej 2

  function compararNumeros(num1, num2) {
    if (num1 > num2) {
      console.log(num1 + ' es mayor que ' + num2 + '.');
    } else if (num1 < num2) {
      console.log(num2 + ' es mayor que ' + num1 + '.');
    } else {
      console.log('Los números ' + num1 + ' y ' + num2 + ' son iguales.');
    }
  }

  compararNumeros(8,3);

  //Ej 3

  function verificarMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
      console.log(numero + ' es múltiplo de 5.');
    } else {
      console.log(numero + ' no es múltiplo de 5.');
    }
  }

  verificarMultiploDeCinco(25);

  //Ej 4

  function imprimirNumerosHasta(numero) {
    for (let i = 0; i <= numero; i++) {
      console.log(i);
    }
  }

  imprimirNumerosHasta(10);

  //Ej 5

  function imprimirPalabraRepeticiones(palabra, repeticiones) {
    for (let i = 0; i < repeticiones; i++) {
      console.log(palabra);
    }
  }

  imprimirPalabraRepeticiones("Matias",3);

  //Ej 6

  function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  const numeros = [1, 2, 3, 4, 5];
imprimirArray(numeros);

//Ej 7

function imprimirArraySinQuintoElemento(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) {
        console.log(array[i]);
      }
    }
  }

  const num = [1, 2, 3, 4, 5];
imprimirArraySinQuintoElemento(num);

// Ej 8

function imprimirMultiplicacion(array, multiplicador) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i] * multiplicador);
    }
  }

  const nume = [1, 2, 3, 4, 5];
imprimirMultiplicacion(nume, 2);

