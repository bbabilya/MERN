const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];
const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function merge(arrayLeft, arrayRight) {
    let newArray = []
    // edge case
    while (arrayLeft.length && arrayRight.length) {
        // which is smaller? left[x] or right[x]?
        if (arrayLeft[0] < arrayRight[0]) {
            newArray.push(arrayLeft.shift())  
        } else {
            newArray.push(arrayRight.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    return [ ...newArray, ...arrayLeft, ...arrayRight ]
}

console.log(merge(sortedA3,sortedB3));
console.log(merge(sortedA4,sortedB4));
