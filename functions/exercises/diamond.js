function makeLine(size){
    let shape = '';
    for(let i = 0; i < size; i++){
        shape += '#'; 
    }
    return shape;
}

function makeSpace(space){
    let whiteSpace = "";
    for (let i = 0; i < space; i++) {
      whiteSpace += " ";
    }
    return whiteSpace;
}

function makeIsoscelesTriangle(height){
    let isTriangle = "";
    for (let i = 0; i < height; i++){
      isTriangle += "\n" + makeSpace(height-i-1) + makeLine(2*i+1) + makeSpace(height-i-1);
    }
    return isTriangle;
}

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }
 
 function makeDiamond(height){
   return makeIsoscelesTriangle(height) + "\n" + reverse(makeIsoscelesTriangle(height));
 }
 
 console.log(makeDiamond(5));