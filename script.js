let currentExpression = "";

function appendValue(value) {
  currentExpression += value;
  document.getElementById("result").value = currentExpression;
}

function clearResult() {
  currentExpression = "";
  document.getElementById("result").value = currentExpression;
}

function calculateResult() {
  try {
    // Evaluate the mathematical expression
    currentExpression = eval(currentExpression);
    document.getElementById("result").value = currentExpression;
  } catch (error) {
    document.getElementById("result").value = "Error";
    currentExpression = "";
  }
}
