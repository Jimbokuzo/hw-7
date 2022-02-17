"use strict"
function exponentiate(num, ex){
    var res = []
    for(var char of num){
        var tot = char ** ex
        res.push(tot)
    }
    
    return res
}
var res = exponentiate([2, 4, 3, 1], 2)
console.log(res)
