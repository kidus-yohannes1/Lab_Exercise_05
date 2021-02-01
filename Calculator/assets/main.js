function click1(){
    document.calculator.display.value += 1
}
function click2(){
    document.calculator.display.value += 2
}
function click3(){
    document.calculator.display.value += 3
}
function click4(){
    document.calculator.display.value += 4
}
function click5(){
    document.calculator.display.value += 5
}
function click6(){
    document.calculator.display.value += 6
}
function click7(){
    document.calculator.display.value += 7
}
function click8(){
    document.calculator.display.value += 8
}
function click9(){
    document.calculator.display.value += 9
}
function click0(){
    document.calculator.display.value += 0
}
function clickDiv(){
    document.calculator.display.value += "/"
}
function clickMult(){
    document.calculator.display.value += "*"
}
function clickAdd(){
    document.calculator.display.value += "+"
}
function clickSub(){
    document.calculator.display.value += "-"
}
function clickClr(){
    document.calculator.display.value = ""
}
function clickPow(){
    document.calculator.display.value = Math.pow(document.calculator.display.value,2)
}
function clickSqrt(){
    document.calculator.display.value = Math.sqrt(document.calculator.display.value);
}
function clickDot(){
    document.calculator.display.value += "."
}
function clickEqual(){
    // document.calculator.display.value += "="
    var x = document.calculator.display.value
    if(x.includes('/0')){
        document.calculator.display.value = "Error, Division by zero."
    }else{
        var Display = eval(document.calculator.display.value);
        document.calculator.display.value = Display;
    }
}

function clickBackSpc(){
    var a = document.calculator.display.value;
    document.calculator.display.value = a.substr(0, a.length-1);
}

if (document.calculator.display == Infinity){
    document.calculator.display = "Zero Division Error"
}