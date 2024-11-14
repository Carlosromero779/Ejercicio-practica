/**
 * Sea el array de numeros enteros [4,2,6,5,8,9,1,7,3,10].
 *Se pide una funcion que retorne la contidad de elementos 
 *que son mayores a un numero dado por parametro.
 *
 * Especificaciones de la funcion:
 * Nombre: cntMayoresQue
 * Entradas : un array de numeros enteros y un numero entero
 * Salidas: un numero entero que representa la cantidad de elementos
 *          del array que son mayores que el numero dado por parametro
 */
 
 let cntMayoresQue = (array, num) => {
    let cont = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            cont++;
        }
    }
    return cont;
 };
 let array = [4,2,6,5,8,9,1,7,3,10];

 let salida = document.getElementById("salida");
 salida.innerHTML = `Mayores a 5: ${cntMayoresQue(array, 5)}`;
 salida.innerHTML += `<br>Mayores a 3: ${cntMayoresQue(array, 3)}`;
 