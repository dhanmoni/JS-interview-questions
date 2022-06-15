let f = function (a, b) {
    console.log('calling', f.length)
    if(arguments.length == f.length){
        console.log('expected')
    } else {
        console.log('no expected')
    }
};

// determine if the function received the number of params it expected

f(1);
f(1, 2);
f(1,2, 3)