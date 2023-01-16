var num = '5-5-6/5*0.'

function CalcSplit(calc) {
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
        w_split=w_split[w_split.length - 1];
    }else{
        w_split=w_split[w_split.length - 2];
    }
    return w_split
}

function Math_Result(value){
    value = CalcSplit(value);
    while (value.length > 1) {
        if (value.indexOf('*') > 0 && (value.indexOf('/') > value.indexOf('*') || value.indexOf('/') == -1)) {
            value.splice(value.indexOf('*') - 1, 3, (parseFloat(value[value.indexOf('*') - 1]) * parseFloat(value[value.indexOf('*') + 1])))
        }
        else if (value.indexOf('/') > 0 && (value.indexOf('*') > value.indexOf('/') || value.indexOf('*') == -1)) {
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

console.log(CalcSplit(num))
console.log(LastWord(num))
console.log(LastWord(num,true))

num = num.slice(0,-(LastWord(num).length+LastWord(num,true).length))
num[0]=parseFloat(5) 
console.log(num.toString())

r="2"
console.log(r.length)
a=r[r.length-1]+3
console.log(a)
console.log(Math_Result(r))

