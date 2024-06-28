function makeLine(size){
    let shape = '';
    for(let i = 0; i < size; i++){
        shape += '#'; 
    }
    return shape;
}

function makeDownwardStairs(height){
    let stairs = "";
    for(let i = 1; i <= height; i++){
      stairs += "\n" + makeLine(i); 
    }
    return stairs;
}
console.log(makeDownwardStairs(5));

function makeSpace(space){
    let whiteSpace = "";
    for (let i = 0; i < space; i++) {
      whiteSpace += " ";
    }
    return whiteSpace;
}
  
function makeSpaceLine(numSpaces, numChars){
    let str = "";
    str = makeSpace(numSpaces) + makeLine(numChars) + makeSpace(numSpaces);
    return str;
}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height){
    let isTriangle = "";
    for (let i = 0; i < height; i++){
      isTriangle += "\n" + makeSpace(height-i-1) + makeLine(2*i+1) + makeSpace(height-i-1);
    }
    return isTriangle;
}
  
console.log(makeIsoscelesTriangle(5));

