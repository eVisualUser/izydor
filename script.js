var buttons = []

function createButton(id) {
  var button = document.createElement("button");
  button.setAttribute("id", id);
  button.innerHTML = id;
  button.className = "gameButton";
  button.addEventListener("click", function() {
    buttonPressed(id);
  });
  document.body.appendChild(button);
  buttons.push(button);
}

function desactivateButton(buttonText) {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id == buttonText) {
            buttons[i].style.backgroundColor = "red";
        }
    }
}

function activateButton(buttonText) {
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id == buttonText) {
            buttons[i].style.backgroundColor = "green";
        }
    }
}

function changeTextAreaColor(asciiValue) {
    var color = asciiToColor(asciiValue);
    var textarea = document.querySelector("textarea.emscripten");
    var inputField = document.querySelector("#inputField");
    textarea.style.color = color;
    inputField.style.color = color;
}

function changeTextAreaColorBackground(asciiValue) {
    var color = asciiToColor(asciiValue);
    var textarea = document.querySelector("textarea.emscripten");
    var inputField = document.querySelector("#inputField");
    var emscripten = document.querySelector("div.emscriptend");
    textarea.style.backgroundColor = color;
    inputField.style.backgroundColor = color;
    if (emscripten != null) {
        emscripten.style.backgroundColor = color;
    }
}

function asciiToColor(asciiValue) {
    switch(asciiValue) {
        case 30: return "black"; break;
        case 37: return "white"; break;
        case 31: return "red"; break;
        case 32: return "green"; break;
        case 33: return "yellow"; break;
        case 34: return "blue"; break;
        case 35: return "purple"; break;
        case 39: return "chartreuse"; break;
        case 36: return "cyan"; break;
        case 40: return "black"; break;
        case 41: return "red"; break;
        case 42: return "green"; break;
        case 43: return "yellow"; break;
        case 44: return "blue"; break;
        case 45: return "purple"; break;
        case 46: return "cyan"; break;
        case 47: return "white"; break;
    }
    return "chartreuse";
}

// Create a variable to store the id of the button that was pressed
var lastPressed = "none";

// Create a function to handle button presses
function buttonPressed(id) {
  lastPressed = id;
}

function resetButtons() {
    lastPressed = "none";
    if (buttons.length) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].parentNode.removeChild(buttons[i]);
          }

        buttons = []
    }
}