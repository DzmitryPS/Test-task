const Btn = document.getElementById('btn');
const Field = document.getElementById('number');
let searchUrl = window.location.search;
let timer;
let n;

// I stored variable in 'search' part of URL. For testing, check example.png please

function counter(n) {
  Btn.innerHTML = n + ' sec';
  Field.value = n;
  n = n - 1;
  if (n < 0) {
    Field.disabled = 0;
    Btn.innerHTML = 'button';
    clearTimeout(timer);
  } else {
    Field.disabled = 1;
    timer = setTimeout(() => counter(n), 1000);
  }
}

//        |\   /|
//         \|_|/
//         /. .\
//        =\_Y_/=
//         {>o<}



document.addEventListener('DOMContentLoaded', function (event) {
  let userInputCheck = searchUrl.split('=');
  n = parseInt(userInputCheck[1]);
  Btn.addEventListener('click', function (event) {
    if (Field.disabled === false && Field.value != '0') {
      event.preventDefault();
      n = parseInt(Field.value);
      window.location.replace(window.location.pathname + '?sec='+ n + window.location.hash)
    }
    else if (n > 0 && Field.value != '0') {
      event.preventDefault();
      Field.disabled = 0;
      clearTimeout(timer);
      Btn.innerHTML = 0 + ' sec';
      Field.value = 0;
      Btn.innerHTML = 'button';
    }
    else {
      event.preventDefault();
      console.log('counter stoped')
    }
  })
  if (
    searchUrl.includes('sec') &&
    userInputCheck[1] &&
    userInputCheck[1] > 0 
    && Number.isInteger(n)
  ) {
    counter(n);
  } else {
    n = 5;
    counter(5);
  }
});