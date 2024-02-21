window.onload = function() {
    //variables
    const clickBtn = document.querySelector("button");
    const mouseOverButton = document.querySelector("button + button");
    const keydownInput = document.querySelector("input");
    const div = document.querySelector("input + div");

    const password = document.querySelector('input[type="password"]');

    const form = document.querySelector("form");
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const para = document.querySelector("p");
    
    //functions
    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    function changeBackground(event) {
        console.log(event);
        console.log(event.target);
        const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        div.style = "height: 100px; width: 100px;";
        div.style.backgroundColor = rndCol;

        if (event.target.innerHTML == "Click") {
            mouseOverButton.removeEventListener("mouseout", changeBackground);
            mouseOverButton.removeEventListener("mouseover", changeBackground);
        }
        // document.body.style.opacity = 0.25; DO NOT DO. IM SORRY. FORGIVE ME
    }

    //call functions aka execute aka run functions
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (fname.value === "" || lname.value === "") {
          para.textContent = "You need to fill in both names!";
        } else {
            form.innerHTML = "";
            para.style.color = "green";
            para.textContent = "You have successfully submitted the form!"
        }
        
      });

    password.addEventListener("focus", (event) => {
        event.target.style.background = "pink";
      });
      
    password.addEventListener("blur", (event) => {
        event.target.style.background = "";
    });

    clickBtn.addEventListener("dblclick", changeBackground);
    mouseOverButton.addEventListener("mouseover", changeBackground);
    mouseOverButton.addEventListener("mouseout", changeBackground);
    keydownInput.addEventListener("keydown", changeBackground);

    

}

/* using function names as variables
() => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
  }
*/
// Assign a string value of "fadeOut" to the "className" 
// property on the ninjaEmojiHTML variable

// let ninjaEmojiHTML = document.getElementById('ninjaEmoji');
// ninjaEmojiHTML.className = "fadeOut";
