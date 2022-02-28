function spongeMeme(sentence) {
    const capitalLetters = sentence.toUpperCase().split("");
   
    for(let i= 1; i < sentence.length; i += 2){
      capitalLetters[i] = capitalLetters[i].toLowerCase();
    }
    return capitalLetters.join("")
    
  }