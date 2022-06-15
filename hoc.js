function add(x, y){
    return x + y;
}

function higherOrderFunction (x, callback){
    return callback(x, 5)
}

console.log(higherOrderFunction(10, add))