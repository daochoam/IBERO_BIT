function number_A(){
    var A = document.getElementById("Number_A").value
    return A;
}
function number_B(){
    var B = document.getElementById("Number_B").value
    return B;
}
function Add() {
    A=number_A();
    B=number_B();
    console.log(B);
    if (isNaN(A)==true || isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE NOT NUMBERS";}
    else if (isNaN(A)==true){
        document.getElementById("Solve").innerHTML = "THE VALUE A IS NOT A NUMBER";}
    else if (isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS NOT A NUMBER";}
    else if (A=="" && B==""){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE EMPTY";}
    else if (A==""){
            document.getElementById("Solve").innerHTML = "THE VALUE A IS EMPTY";}
    else if (B==""){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS EMPTY";}
    else{
        var result = parseFloat(A)+parseFloat(B);
        document.getElementById("Solve").innerHTML = result.toString();}
}
function Subtract() {
    A=number_A();
    B=number_B();
    if (isNaN(A)==true || isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE NOT NUMBERS";}
    else if (isNaN(A)==true){
        document.getElementById("Solve").innerHTML = "THE VALUE A IS NOT A NUMBER";}
    else if (isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS NOT A NUMBER";}
    else if (A=="" && B==""){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE EMPTY";}
    else if (A==""){
            document.getElementById("Solve").innerHTML = "THE VALUE A IS EMPTY";}
    else if (B==""){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS EMPTY";}
    else{
        var result = parseFloat(A)-parseFloat(B);
        document.getElementById("Solve").innerHTML = result.toString();
    }
}
function Multiply() {
    A=number_A();
    B=number_B();
    if (isNaN(A)==true || isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE NOT NUMBERS";}
    else if (isNaN(A)==true){
        document.getElementById("Solve").innerHTML = "THE VALUE A IS NOT A NUMBER";}
    else if (isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS NOT A NUMBER";}
    else if (A=="" && B==""){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE EMPTY";}
    else if (A==""){
            document.getElementById("Solve").innerHTML = "THE VALUE A IS EMPTY";}
    else if (B==""){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS EMPTY";}
    else{
        var result = parseFloat(A)*parseFloat(B);
        document.getElementById("Solve").innerHTML = result.toString();
    }
}
function Divided() {
    A=number_A();
    B=number_B();
    if (isNaN(A)==true || isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE NOT NUMBERS";}
    else if (isNaN(A)==true){
        document.getElementById("Solve").innerHTML = "THE VALUE A IS NOT A NUMBER";}
    else if (isNaN(B)==true){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS NOT A NUMBER";}
    else if (A=="" && B==""){
            document.getElementById("Solve").innerHTML = "INPUT VALUES ARE EMPTY";}
    else if (A==""){
            document.getElementById("Solve").innerHTML = "THE VALUE A IS EMPTY";}
    else if (B==""){
            document.getElementById("Solve").innerHTML = "THE VALUE B IS EMPTY";}
    else{
        var result = parseFloat(A)/parseFloat(B);
        document.getElementById("Solve").innerHTML = result.toString();
    }
}
/************************ OTHERS OPERATORS ************************/
function Reset(){
    document.getElementById("Form_1").reset();
    document.getElementById("Solve").innerHTML = "";
}
