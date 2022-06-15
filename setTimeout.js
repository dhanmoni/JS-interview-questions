console.log('a')
let timmy = setTimeout(function(){
    console.log('b')
}, 1);
let timothy = setTimeout(function(){
    console.log('c')
}, 10);
let timer = setTimeout(function(){
    console.log('d')
}, 0);

console.log('e')

//output: 
// guess -> a e d b c
// correct -> a e b d e
// reason -> 1 ms was really fast, so it came to the callback queue before 0 ms callback fn