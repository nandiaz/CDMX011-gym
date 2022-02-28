function spinWords(string){
    const words= string.split(" ")
   for(let i = 0; i < words.length; i++){
     if(words[i].length >= 5){
       const reverse = words[i].split("").reverse().join("")
       words[i] = reverse
     }
    
   }
    const reverseWord = words.join(" ")
    console.log(reverseWord)
    return reverseWord
  }