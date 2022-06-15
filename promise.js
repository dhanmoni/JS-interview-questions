const btn = document.getElementById("button")

btn.addEventListener('click', ()=> {
    var res = newPr(10)
    console.log('after call')

    res.then(data => console.log('resolve', data))
    res.catch(err=> console.log('err', err))
})

function newPr(num){
    console.log('inside fn')
    return new Promise((resolve, reject)=> {
        console.log('inside promise')
        setTimeout(()=> {
            console.log('inside setTimeout')
            resolve(num)
        }, 10000)
    })
}
console.log('1st log')

console.log('last')