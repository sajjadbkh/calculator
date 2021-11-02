//* elements
const buttons = document.getElementsByClassName("button");
const input = document.querySelector(".input");
const resultP = document.querySelector(".result");

let open = false;

//* events 
for (button of buttons) {
    button.addEventListener("click", event => {
        let id = event.target.id;
        switch (id) {
            case "one":
                input.innerHTML += 1;
                break;

            case "two":
                input.innerHTML += 2;
                break;

            case "three":
                input.innerHTML += 3;
                break;

            case "four":
                input.innerHTML += 4;
                break;

            case "five":
                input.innerHTML += 5;
                break;

            case "six":
                input.innerHTML += 6;
                break;

            case "seven":
                input.innerHTML += 7;
                break;

            case "eight":
                input.innerHTML += 8;
                break;

            case "nine":
                input.innerHTML += 9;
                break;

            case "zero":
                input.innerHTML += 0;
                break;
            
            case "point":
                    input.innerHTML += ".   ";
                    break;

            // top row
            case "clear":
                input.innerHTML = "";
                resultP.innerText = "";
                break;

            case "parantes":
                if (!open) {
                    input.innerHTML += "( ";
                    open = true;
                } else {
                    input.innerHTML += " )";
                    open = false;
                }
                break;

            case "darsad":
                input.innerHTML += " % ";
                break;

            case "divition":
                input.innerHTML += " &divide ";
                break;

            case "times":
                input.innerHTML += " &times ";
                break;

            case "minus":
                input.innerHTML += " - ";
                break;

            case "plus":
                input.innerHTML += " + ";
                break;

            case "result":
                resultFunction()
                break;

            case "delete":
                deleteFunction();
                break;
        }
    });
}

//? delete function
let deleteFunction = function () {
    let exp = input.innerText;
    let arr = exp.split("");
    arr.pop(arr.length - 1);
    exp = arr.join("");
    input.innerHTML = exp;
}

//? answear function
let resultFunction = function () {
    let inputValue = input.innerText;
    let arr = inputValue.split(" ");

    //* conver timea and divide
    if (arr.includes("×")) {
        let times = [];
        arr.forEach((val, index) => {
            if (val === "×") {
                times.push(index);
            }
        });
        for (i = 0; i < times.length; i++) {
            arr[times[i]] = "*";
        }
    }

    if (arr.includes("÷")) {
        let divide = [];
        arr.forEach((val, index) => {
            if (val === "÷") {
                divide.push(index);
            }
        });
        for (i = 0; i < divide.length; i++) {
            arr[divide[i]] = "/";
        }
    }

    if (arr.includes("×") && arr.includes("÷")) {
        let divide = [];
        let times = [];
        // divition
        arr.forEach((val, index) => {
            if (val === "×") {
                divide.push(index);
            }
        });
        for (i = 0; i < divide.length; i++) {
            arr[divide[i]] = "*";
        }
        inputValue = arr.join("");

        //times
        arr.forEach((val, index) => {
            if (val === "÷") {
                times.push(index);
            }
        });
        for (i = 0; i < times.length; i++) {
            arr[times[i]] = "/";
        }
    }

    inputValue = arr.join("");

    //* show result
    let result = eval(inputValue).toFixed(2);
    if (isNaN(result)) {
        resultP.innerText = "Syntax error"
    } else {
        resultP.innerText = result;
    }
}