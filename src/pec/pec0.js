//Ejercicio 0: verifica si tiene edad para conducir
export function canDrive(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

//Ejercicio 1: verifica si es un triángulo equilátero
export function isEquilateral(a, b, c) {
    if ((a === b) && (a === c)) {
        return true;
    } else {
        return false;
    }
}

//Ejercicio 2: función suma aplicada a un array
export function sum2(array) { 
    for( let i = 0; i < array.length; i++ ){
        array[i] += 2;
    }
    return array;
}

export function fibonacci(n) { }
