// generate random hex color

// function color(){
//     let c = ''
//     for(let i = 0; i < 6; ++i){
//         c = c + (Math.random() * 9).toFixed(0)
//     }
//     console.log(c)
// }
function color1(){
    return '#' + Math.random().toString(16).substring(2, 8)
}

function color2(){
    let letters = '1234567890ABCDEF'
    let c = '#';
    for(let i = 0; i < 6; ++i){
        c = c + letters[(Math.random() * 16).toFixed(0)]
    }
    return c;
}
console.log(color1())
console.log(color2())