// 浅复制
var num = [1,2,3,4,5]
var newNum = num
num[0] = 10
console.log('newNum', newNum)

// 深复制
function DeepCopyArray (arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        arr2[i] = arr1[i]
    }
}

var newNum2 = []
DeepCopyArray(num, newNum2)
num[0] = 9
console.log('newNum2>>>', newNum2)

// 二维数组
var grades = [
    [88,86,82],
    [91,82,83],
    [77,72,79],
    [86,80,82]
]
var total = 0
var average = 0.0

for (var row = 0; row < grades.length; ++row) {
    for (var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col]
    }
    average = total / grades[row].length
    console.log(`
        student ${parseInt(row + 1)}
        average: ${average.toFixed(2)}
    `)
    total = 0
    average = 0.0
}

