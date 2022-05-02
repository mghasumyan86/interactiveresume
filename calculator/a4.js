function add() {
    let oneNumber= +document.getElementById("number1").value;
    let twoNumber= +document.getElementById("number2").value;
    console.log(oneNumber,twoNumber);
    document.getElementById("number3").value=oneNumber+twoNumber;
}
function subtract() {
    let oneNumber= +document.getElementById("number1").value;
    let twoNumber= +document.getElementById("number2").value;
    console.log(oneNumber,twoNumber);
    document.getElementById("number3").value=oneNumber-twoNumber;
}
function multiply() {
    let oneNumber= +document.getElementById("number1").value;
    let twoNumber= +document.getElementById("number2").value;
    console.log(oneNumber,twoNumber);
    document.getElementById("number3").value=oneNumber*twoNumber;
}
function divide() {
    let oneNumber= +document.getElementById("number1").value;
    let twoNumber= +document.getElementById("number2").value;
    console.log(oneNumber,twoNumber);
    document.getElementById("number3").value=oneNumber/twoNumber;
}
function resetAll() {
    document.getElementById("number3").value=" ";
    document.getElementById("number1").value=" ";
    document.getElementById("number2").value=" ";
}