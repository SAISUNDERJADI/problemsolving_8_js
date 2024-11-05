// removing dupilicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

const originalArray = [1,2,3,2,1,3,4,2,2,6,1,2];
const uniqueArray = removeDuplicates(originalArray);
document.write(uniqueArray);
console.log(uniqueArray)

// no . of occurances

function countoccurance(array){
    const count={};
    array.forEach(item=>{
        count[item]=(count[item]||0)+1;
    })
    return count;
}
const arr=[1,2,3,2,1,3,4,2,2,6,1,2]
const occurance=countoccurance(arr)
console.log(occurance)
document.write(occurance)
