const c = 99;

let res

function addition(){
    res = parseInt(document.getElementById('rectangle2').value) + c;
    document.getElementById('result').innerHTML = 'Result: ' + res;
}

function subtraction(){
    res = parseInt(document.getElementById('rectangle2').value) - c;
    document.getElementById('result').innerHTML = 'Result: ' + res;
}

function multiplication(){
    res = parseInt(document.getElementById('rectangle2').value) * c;
    document.getElementById('result').innerHTML = 'Result: ' + res;
}

function division(){
    res = parseInt(document.getElementById('rectangle2').value) / c;
    document.getElementById('result').innerHTML = 'Result: ' + res;
}

