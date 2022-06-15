// implement array.prototype.flat

const flatten = (arr) => {
  let res = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return res;
};

// const ar1 = [1, 2, 3, [4, 5], [6, [7, 8]]];
// const res = flatten(ar1);
// console.log(res);


const flattenDepth = (arr, d = 1) => {
    let res = [];
    
        for(let i = 0; i < arr.length; ++i){
            if(Array.isArray(arr[i])){
                if(d > 0){
                    res = res.concat(flattenDepth(arr[i], d - 1))
                } else {
                    res.push(arr[i])
                }
            } else {
                res.push(arr[i])
            }
        }
    return res;
}
const ar2 = [1, 2, 3, [4, 5], [6, [7, 8]]];
const res = flattenDepth(ar2, 0);
console.log(res);