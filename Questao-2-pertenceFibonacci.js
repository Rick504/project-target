 function pertenceFibonacci(numero) {
  let a = 0,
    b = 1;

  if (numero === 0 || numero === 1) {
    return true;
  }

  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }

  return b === numero;
}

let numeroInformado = 12

if (pertenceFibonacci(numeroInformado)) {
  console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}
