const btn = document.getElementById('button')

btn.addEventListener('click', listener1)
btn.addEventListener('click', listener2)

function listener1(){
    console.log('lister 1')
    setTimeout(()=> console.log("#1 timeout 1"), 0)
    Promise.resolve().then(()=> console.log("#1 promise 1"))
    const promise = Promise.resolve()
    setTimeout(()=> console.log("#1 timeout 2"), 0)
    console.log("#1 Hello from main thread")
    setTimeout(()=> promise.then(()=> console.log("#1 promise 2")), 0)
}
/*
// guess => 
// this is for only one call, ie, for listener1()
    Hello from main thread
    promise 1
    timeout 1
    timeout 2
    promise 2

    // correct -- yes
*/

function listener2(){
    console.log("listener 2")
    setTimeout(()=> console.log("#2 timeout 1"), 0)
    Promise.resolve().then(()=> console.log("#2 promise 1"))
    const promise = Promise.resolve()
    setTimeout(()=> console.log("#2 timeout 2"), 0)
    console.log("#2 Hello from main thread")
    setTimeout(()=> promise.then(()=> console.log("#2 promise 2")), 0)
}