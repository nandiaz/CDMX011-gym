function leftRotations(str) {
	
	const arr = []
	for(let i = 0; i < str.length; i++){
		const rotated = str.slice(i) + str.slice(0, i);
		
		arr.push(rotated)
	}
 return arr
	
}

function rightRotations(str) {
	const arr = []
	for(let i = 0; i < str.length; i--){
		const rotated = str.slice(i) + str.slice(0, i);
		
		arr.push(rotated)
	}
 return arr
}

//---------------OTHER SOLUTION-------------//

// function leftRotations(str) {
	
//     //console.log(str)
    
//     const letter = str.split("");
//     const arr = [str];
//     for (let i = 1; i < str.length; i++) {
//       const result1 = letter.shift() //+ "|"+letter.join("") + letter;
//       const result2 = letter;
//       const result3 = letter.join('') + result1;
//       const resultTotal = result2.push(result1);
//       //console.log(letter)
//       arr.push(result3)
//       //console.log("Arr: " + letter)
//       //console.log("1: "+result1)
//           //console.log("2: " + result2.push(result1))
//       //console.log(result3);
//       //const resultTotal = letter.join('') + result1;
//     }
//     return arr;
//   }
  
//   function rightRotations(str) {
//       const letter = str.split("");
//     const arr = [];
//     for (let i = 0; i < str.length; i++) {
//       const result1 = letter.pop() //+ "|"+letter.join("") + letter;
//       const result2 = letter;
//       const result3 = letter.join('') + result1;
//       const resultTotal = result2.unshift(result1);
//       //console.log(letter)
//       arr.push(result3)
//       //console.log("Arr: " + letter)
//       //console.log("1: "+result1)
//           //console.log("2: " + result2.unshift(result1))
//       //console.log(result3);
//       //const resultTotal = letter.join('') + result1;
//       //console.log(arr);
//     }
//    return arr;
//   }