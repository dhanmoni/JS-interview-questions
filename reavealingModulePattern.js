// const myObj = {
//     data: [],
//     add: function(){
//         this.data.push('hello')
//     },
//     remove: function(){
//         this.data.pop()
//     },
//     render: function(){
//         // ...
//     }
// }

// myObj.add()
// console.log(myObj.data)

const myObj = (function(){
    const data = [];
    const add = ()=>{
        data.push('hello');
    };
    const remove = ()=> {
        data.pop();
    };
    const render = ()=>{
        console.log('rendering...')
    }
    return {
        render
    }
})()

myObj.render()