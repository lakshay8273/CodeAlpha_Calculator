// Get display element
let display = document.getElementById("display");

// Add value to display
function appendValue(value) {
  display.value += value;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  if (display.value === "") {
    return;
  }

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Keyboard Support
document.addEventListener("keydown", function (event) {
  let key = event.key;

  // Numbers
  if ((key >= "0" && key <= "9") || key === ".") {
    appendValue(key);
  }

  // Operators
  else if (
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/" ||
    key === "%"
  ) {
    appendValue(key);
  }

  // Enter
  else if (key === "Enter") {
    event.preventDefault();
    calculate();
  }

  // Backspace
  else if (key === "Backspace") {
    deleteLast();
  }

  // Escape
  else if (key === "Escape") {
    clearDisplay();
  }
});
