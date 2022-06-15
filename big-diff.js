let numbers = [12, 2, 6, 5, 9,10, 33]

let diff = (arr)=> {
    let smallest = arr[0];
    let largest = arr[0]
    arr.forEach(num=> {
        if(num < smallest) smallest = num;
        if(num > largest) largest = num;
    })
    return (largest - smallest)
}

let diff2 = (arr)=> {
    let newArr = Array.from(new Set(arr)).sort((a,b)=> a-b)
    console.log(newArr)
    return (newArr[newArr.length - 1] - newArr[0])
}

console.log(diff2(numbers))
console.log(diff(numbers))


