/************************ VAR INIT ************************/
var operation = "";
Display_II(operation)
var ans_flag = false;

function CalcSplit(calc){
    /* CalcSplit
        Separates the string of characters in an array from the mathematical operators - + * /, 
        keeping the same.
    Args:
        Value <- The function receives a string.
    Returns:
        Value -> Returns an array with the split string characters
    */
    return calc.split(/(\-|\+|\*|\/)/);
}
function LastWord(words, posword=false) {
    /* LastWord
        This function finds the last word in a string
    Args:
        words <- The function receives a string.
    Returns:
        Last_Word -> Returns a string of characters with the last o penultimate found word
    */
    var w_split = CalcSplit(words);
    if (posword==false){
        w_split=w_split[w_split.length];
        console.log(w_split);
    }else{
        w_split=w_split[w_split.length - 2];
    }
    return w_split;
}

function AnsFlag(number) {
    ans_flag = false;
    if (isNaN(number)==True) {
        if (number=="."){
            operation = "0.";
            result = "";
        }else{
            operation = result.toString() + number;
            result = "";
        }
    }else{
        operation = number;
        result = "";
    }
    Display_I(result);
    Display_II(operation);
}
function Math_Result(value){
    /* Math_Result
        This function calculates the final result of the entered mathematical operation
    Args:
        Value <- The function receives a string.
    Returns:
        Value -> Returns a double value with the result of the proposed operations
    */
    value = CalcSplit(value);
    while (value.length > 1) {
        if (value.indexOf('*') > 0 && (value.indexOf('/') > value.indexOf('*') || value.indexOf('/') == -1)) {
            value.splice(value.indexOf('*') - 1, 3, (parseFloat(value[value.indexOf('*') - 1]) * parseFloat(value[value.indexOf('*') + 1])))
        }
        else if (value.indexOf('/') > 0 && (value.indexOf('*') > value.indexOf('/') || result.indexOf('*') == -1)) {
            value.splice(value.indexOf('/') - 1, 3, (parseFloat(value[value.indexOf('/') - 1]) / parseFloat(value[value.indexOf('/') + 1])))
        }
        else if (value.indexOf('+') > 0) {
            value.splice(value.indexOf('+') - 1, 3, (parseFloat(value[value.indexOf('+') - 1]) + parseFloat(value[value.indexOf('+') + 1])))
        }
        else if (value.indexOf('-') > 0) {
            value.splice(value.indexOf('-') - 1, 3, (parseFloat(value[value.indexOf('-') - 1]) - parseFloat(value[value.indexOf('-') + 1])))
        }
    }
    return value;
}
/*********************************************************/
/************************ DISPLAY ************************/
function Display_I(txt_1){
    document.getElementById("Display_1").innerHTML = txt_1.toString();
}

function Display_II(txt_2){
    document.getElementById("Display_2").innerHTML = txt_2.toString();
}
/*********************************************************/
/************************ NUMBRES ************************/
function Zero() {
    var LW = LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("0");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "0";
    }
    Display_II(operation);
}
function One() {
    if (isNaN(operation)==true){
        var LW= LastWord(operation);    // LW -> Last Word ()
    }
    console.log(LW);
    if (ans_flag == true) {
        AnsFlag("1");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0 || operation.length == 0 || isNaN(LW)==true) {
        operation += "1";
    }
    else if ((LW == 0 && LW.length == 1)) {
        operation[operation.length-1] = "1";
    }
    Display_II(operation);
}
function Two() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("2");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "2";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "2";
    }
    Display_II(operation);
}
function Three() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("3");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "3";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "3";
    }
    Display_II(operation);
}
function Four() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("4");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "4";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "4";
    }
    Display_II(operation);
}
function Five() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("5");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "5";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "5";
    }
    Display_II(operation);
}
function Six() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("6");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "6";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "6";
    }
    Display_II(operation);
}
function Seven() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("7");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "7";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "7";
    }
    Display_II(operation);
}
function Eight() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("8");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "8";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "8";
    }
    Display_II(operation);
}
function Nine() {
    var LW= LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("9");
    }
    else if ((LW == 0 && LW.length > 1) || LW != 0) {
        operation += "9";
    }
    else if (LW == 0 && LW.length == 1) {
        operation[operation.length-1] = "9";
    }
    Display_II(operation);
}
/************************ MATHEMATICAL OPERATORS ************************/
function Multiply() {
    var LW = LastWord(operation);          // LW -> Last Word
    if (ans_flag == true) {
        AnsFlag("*");
    }
    else if(operation.length==0){
        operation = "0*";
    }
    else if (isNaN(LW) == false) {
        operation += "*";
    }
    else if (isNaN(LW) == true || (LW[LW.length-1]=="." && LW.length==1)) {
        operation[operation.length-1] = "*";
    }
    Display_II(operation);
}
function Divided() {
    var LW = LastWord(operation);          // LW -> Last Word
    if (ans_flag == true) {
        AnsFlag("/");
    }
    else if(operation.length==1){
        operation = "0/";
    }
    else if (isNaN(LW) == false) {
        operation += "/";
    }
    else if (isNaN(LW) == true || (LW[LW.length-1]=="." && LW.length==1)) {
        operation[operation.length-1] = "/";
    }
    Display_II(operation);
}
function Subtract() {
    var LW = LastWord(operation);          // LW -> Last Word
    if (ans_flag == true) {
        AnsFlag("-");
    }
    else if(operation.length==0){
        operation = "0-";
    }
    else if (isNaN(LW) == false) {
        operation += "-";
    }
    else if (isNaN(LW) == true || (LW[LW.length-1]=="." && LW.length==1)) {
        operation[operation.length-1] = "-";
    }
    Display_II(operation);
}
function Add() {
    var LW = LastWord(operation);          // LW -> Last Word
    if (ans_flag == true) {
        AnsFlag("+");
    }
    else if(operation.length==0){
        operation = "0+";
    }
    else if (isNaN(LW) == false) {
        operation += "+";
    }
    else if (isNaN(LW) == true || (LW[LW.length-1] =="." && LW.length==1)) {
        operation[operation.length-1] = "+";
    }
    Display_II(operation);
}
function Equal() {
    var LW = LastWord(operation);          // LW -> Last Word
    if (ans_flag == false) {
        ans_flag = true;
    }
    if (isNaN(LW)==true || (LW[LW.length-1] =="." && LW.length==1)) {
        operation = operation.slice(0, -1);
        result = Math_Result(operation)
    }
    else {
        result = Math_Result(operation)
    }
    Display_I(operation);
    Display_II(result);
}
/************************ OTHERS OPERATORS ************************/
function Decimal() {
    var LW = LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("-");
    }
    else if (isNaN(LW) == false) {
        operation += "-";
    }
    else if (isNaN(LW) == true || (LW[LW.length-1]=="." && LW.length==1)) {
        operation[operation.length-1] = "-";
    }
}
function Reset(){
    var LW = LastWord(operation);    // LW -> Last Word ()
    if (ans_flag == true) {
        AnsFlag("+");
    }
    else if (isNaN(LW) == false) {
        operation += "+";
    }
    else if (isNaN(LW) == true || (LW[LW.length-1] =="." && LW.length==1)) {
        operation[operation.length-1] = "+";
    }
}
function Backspace() {
    var LW = LastWord(operation);    // LW -> Last Word
    if (ans_flag == false) {
        ans_flag = true;
    }
    if (isNaN(LW)==true || (LW[LW.length-1] =="." && LW.length==1)) {
        operation = operation.slice(0, -1);
    }
    result = Math_Result(operation)
}
