function makeLine(size){
    let shape = '';
    for(let i = 0; i < size; i++){
        shape += '#'; 
    }
    return shape;
}

console.log(makeLine(5));

function makeSquare(size){
    let str = "";
   for(let i = 0; i< size; i++){
     str += "\n" + makeLine(size);
   }
    return str;
}
console.log(makeSquare(5));

function makeRectangle(width, height){
    let rectangle = "";
    for(let i = 0; i < height; i++){
      rectangle += "\n" + makeLine(width);
    }
    return rectangle;
}
console.log(makeRectangle(5, 3));

function makeSquare2(width, height){
    return makeRectangle(width, height);
}
console.log(makeSquare2(4, 4));

