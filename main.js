"use strict"
function exponentiate(arr, exp) {

	function involution(num, exp) {
		var res = 1;
		for (var j = 0; j < exp; j += 1) {
			res *= num;
		}
		return res;
	}

	var resultArr = [];

	for (var i = 0; i < arr.length; i += 1) {
		resultArr.push(arr[i]);
		resultArr.push(involution(arr[i], exp));
	}
	return resultArr;
}
var res = exponentiate([2, 4, 3, 1], 2)
console.log(res);






// function exponentiate(num, p){
//     var char = ""
//     var isGood = false
//     // for(var text of num){
// 	for(var i = 0; i < num.length; i ++){
//         // var text = num
//         // text = num**p
//         isGood = true
//         if(isGood === true){
//             text = num[i]**p
//             // continue
//         }
        
//     }
//     return text
// }
// var res = exponentiate([2, 4, 3, 1], 2)
// console.log(res)


// function exponentiate(arr, exp) {

// 	function involution(num, exp) {
// 		var res = 1;
// 		for (var j = 0; j < exp; j += 1) {
// 			res *= num;
// 		}
// 		return res;
// 	}

// 	result = [];

// 	for (var i = 0; i < arr.length; i += 1) {
// 		result[i*2]=(arr[i]);
// 		result[i*2]=(involution(arr[i], exp));
// 	}
// 	return result;
// }

// var res = exponentiate([2, 4, 3, 1], 2)
// console.log(res)






// function exponentiate(num, p){
//     return num**p
// }
// var res = exponentiate([2, 4, 3, 1], 2)
// console.log(res)


// function exponentiate(num, p){
//     var char = ""
//     var isGood = false
//     for(var text of num){
//         text = num**p
//         isGood = true
//         if(isGood === true){
//             char += text
//             continue
//         }
        
//     }
//     return char
// }
// var res = exponentiate([2, 4, 3, 1], 2)
// console.log(res)

// function sort(str){
    
//     var isGood = false
//     for(var text of str){
//         var text = str.slice(-1)
//         isGood = true
//         console.log(text)
//         if(isGood === true){
//             var text = str.pop()
//             continue
//         }
//         tot += text
//     }
//     return str
// }
// var res = sort(["a", "b", "c"])
// console.log(res)




// "use strict"
// function exponentiate(num, p){
//     return `${num}`**`${p}`
// }
// var res = exponentiate([2, 4, 3, 1], 2)
// console.log(res)
