const Btn = document.getElementById('btn');
const Field = document.getElementById('number');


let searchUrl = window.location.search;


let timer;
function counter(n){

    n= n-1;
    alert(n)
    if(n<=0){
        clearTimeout(timer);
    } else {
        timer = setTimeout(counter(n), 1000);
      }
}



document.addEventListener("DOMContentLoaded",function (event) {
    let userInputCheck = searchUrl.split('=');
     let n = parseInt(userInputCheck[1])
    if(searchUrl.includes('sec')
    && userInputCheck[1]
    && userInputCheck[1] > 0
    && Number.isInteger(n)
    ){
     Btn.innerHTML = n + ' sec'
     Field.value = n;

    counter(n);
    }

    })

