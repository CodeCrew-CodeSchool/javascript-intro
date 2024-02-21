window.onload = function() {
    const Ebony = document.querySelector("button");

    function random(number) {
    return Math.floor(Math.random() * (number + 1));
    }

    function clickAction() {
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
    }
    Ebony.addEventListener("click", clickAction);
}

/* using function names as variables
() => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  }
*/
