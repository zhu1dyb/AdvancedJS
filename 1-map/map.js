const array = [
    {id:1, name: "Вася"},
    {id:2, name: "Коля"},
    {id:1, name: "Вася"}
]

const newSet = new Set()

function addSet(arr) {
    const setId = new Set();
    for(const arrItem of arr) {
        if(!setId.has(arrItem.id)) {
            setId.add(arrItem.id)
            newSet.add(arrItem)
        }
        }
        return newSet
    }
    addSet(array)
    console.log(newSet)