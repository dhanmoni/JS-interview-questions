let obj = (function(){
    let objInstance;
    function create(){
        let isRunning = false;
        function start(){
            isRunning = true;
        }
        function stop(){
            isRunning = false;
        }
        function currentState(){
            return isRunning;
        }
        return {
            start, stop, currentState
        }
    }
    return {
        getInstance: function(){
            if(!objInstance){
                objInstance = create();
            }
            return objInstance;
        }
    }
})()

let obj1 = obj.getInstance()
let obj2 = obj.getInstance()
console.log(obj1.currentState())
console.log(obj2.currentState())
obj1.start()
console.log(obj1.currentState())
console.log(obj2.currentState())
obj2.stop()
console.log(obj1.currentState())
console.log(obj2.currentState())