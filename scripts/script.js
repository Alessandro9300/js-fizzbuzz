// Fizz Buzz test:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


// creo uno ciclo for che faccia 100 cicli

for (var i = 0; i < 100; i++) {

  var num = i + 1;

  // creo delle condizioni per avere diversi output

  if (num % 5 === 0 && num % 3 === 0) {
    num = "FizzBuzz";
    console.log(num);
  } else if (num % 3 === 0){
    num = "Fizz";
    console.log(num);
  } else if (num % 5 === 0) {
    num = "Buzz";
    console.log(num);
  } else {
    console.log(num);
  }

}
