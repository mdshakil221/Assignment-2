//question: 1
function calculateDifference(a, b){
    return a - b;
}
console.log(calculateDifference(10, 5));


//Question: 2
function isOdd(num){
    return num % 2 !==0;
}
console.log(isOdd(5));
console.log(isOdd(6));


//Question: 3
function findMin(arr){
    return Math.min(...arr);
}
const numbers = [2, 4, 5, 8];
console.log(findMin(numbers));


//Question: 4
function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0);
}
const num = [1, 4, 5, 6, 2, 8, 9, 7];
console.log(filterEvenNumbers(num));


//Question: 5
function sortArrayDescending(arr){
    return arr.slice().sort((a, b) => b-a);
}
const arr = [3, 2, 5, 7 ,1, 5, 4, 9, 8];
console.log(sortArrayDescending(arr));


//Question: 6
function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}
const str = "Hello World";
console.log(lowercaseFirstLetter(str));


//Question: 7
function countVowels(str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let char of str){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}
const text = "Md Shakil Ahammod";
console.log(countVowels(text));


//Question: 8
function findAverage(arr){
    let sum = 0;
    for (let number of arr){
        sum+=number;
    }
    return sum/arr.length;
}
const Array = [10,20,30,50];
console.log(findAverage(Array));