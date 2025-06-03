const arrayToSort = []

for (let i = 0; i < 20; i++){
    arrayToSort.push(Math.floor(Math.random() * 101))
}

function copyArray(arrayToCopy){
    return [...arrayToCopy]
}
console.log(arrayToSort)

function bubbleSort(arrayToSort){
    const sortedArray = copyArray(arrayToSort)
    for (let i = 0; i < arrayToSort.length; i++){
        for (let i = 0; i < arrayToSort.length; i++){
            if (i != arrayToSort.length){
                if (sortedArray[i] > sortedArray[i+1]){
                    let temp = sortedArray[i]
                    sortedArray[i] = sortedArray[i+1]
                    sortedArray[i+1] = temp
                }
            }
        }
    }
    return sortedArray
}

console.log(bubbleSort(arrayToSort))