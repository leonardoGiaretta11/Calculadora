let flag = 0;

let flag_parenteses = 0;

function show (ta) {

    let num = ta - '0';

    if (document.getElementById("number").innerHTML.length >= 14) 
        return;

    if (flag == 1) {
        flag = 0;
        document.getElementById("number").innerHTML = num;
        return;
    }

    if (document.getElementById("number").innerHTML === "0") {
        document.getElementById("number").innerHTML = ta;
        return;
    }

    document.getElementById("number").innerHTML += num;
}

function clearAC () {
    document.getElementById("number").innerHTML = "0"; 
    flag_parenteses = 0;
}

function operat0(op) {
    if (op === '.' || op === '%') {
        document.getElementById("number").innerHTML += op;
        return;
    }
    document.getElementById("number").innerHTML += ' ';
    document.getElementById("number").innerHTML += op + ' ';
}

function myEvaluator () {
    document.getElementById("number").innerHTML = eval(document.getElementById("number").innerHTML);
    flag = 1;
}

function myPar() {
    if (flag_parenteses == 1) {
        document.getElementById("number").innerHTML = ( document.getElementById("number").innerHTML === '0') ?  document.getElementById("number").innerHTML = ')' :  document.getElementById("number").innerHTML += ')';
        flag_parenteses = 0;
        return;
    }

    document.getElementById("number").innerHTML = ( document.getElementById("number").innerHTML === '0') ?  document.getElementById("number").innerHTML = '(' :  document.getElementById("number").innerHTML += '(';
    flag_parenteses = 1;
    
}

function eraser(){
    if (document.getElementById("number").innerHTML.length === 1) {
        document.getElementById("number").innerHTML = 0;
        return;
    }
    let str = document.getElementById("number").innerHTML;
    document.getElementById("number").innerHTML = str.substring(0, str.length-1);
}