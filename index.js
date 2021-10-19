// 1
// const leapYears = [];
// const years = [1974,1900,1985,2000];
// for(let i = 0; i < years.length; i++){
//     if(years[i] % 4 === 0 && (years[i] % 100 !==0 || years[i] % 400 ===0)){
//         leapYears.push(years[i])
//     }
// }
// console.log(leapYears)

2
// function factorial (a){
//     let number = 1;
//     for(let i = 1; i <= a; i++){
//         number *= i;
//     }
//     console.log(number)
//     }
//     factorial(7)

3
// const numbers = [1,6,23,8,4,98,3,7,3,98,4,98]
// let sumOddNumbers = 0;
// for(let i = 0; i < numbers.length; i++){
//    if(numbers[i] % 2 !== 0){
//     sumOddNumbers += numbers[i]
//    }
// }
// console.log(sumOddNumbers)




4
// const numbers = [1,6,23,8,4,98,3,7,3,98,4,98]
// let highestNumber = 0;
// let lowestNumber = numbers[0];
// for( let i =0; i < numbers.length; i++ ){
//     if( numbers[i] > highestNumber){
//         highestNumber = numbers[i]
//     }
//     if( numbers[i] < lowestNumber){
//         lowestNumber = numbers[i]
//     }
// }
// console.log(highestNumber,lowestNumber)

5
// let longestString = '';
// let value = 0;
// const strings = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"];
// for( let i =0; i < strings.length; i++ ){
//   if( strings[i].length > value ){
//         value = strings[i].length;
//         longestString = strings[i]
//     }
    
// }
// console.log(longestString)


6
// const numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// let highestNumber = 0;
// const highestNumberIndexes = [];
 
// for( let i =0; i < numbers.length; i++ ){
//     if( numbers[i] > highestNumber){
//         highestNumber = numbers[i]
//     }
// }
// for( let i =0; i < numbers.length; i++ ){
//    if( numbers[i] === highestNumber){
//        highestNumberIndexes.push(i)
//    }
// }
// console.log(highestNumberIndexes)




7
// const numbers = [1,6,23,8,4,98,3,7,3,98,4,98]
// const evenItems = [];
// let sumEvenValues = 0;
// for( let i = 0; i < numbers.length; i++ ){
// if( numbers[i] % 2 === 0 ){
//         evenItems.push(numbers[i])
//         }
// }
// for( let i = 0; i < evenItems.length; i++ ){
//     sumEvenValues += evenItems[i]
// }
// const averageEvenValues = sumEvenValues/evenItems.length

// console.log(averageEvenValues.toFixed(2))

8
// const numbers = [1,6,23,8,4,98,3,7,3,98,4,98]
// const evenIndexItems = [];
// let sumEvenValues = 0;
// for( let i = 0; i < numbers.length; i++ ){
// if( i % 2 === 0 && i !==0 ){
//         evenIndexItems.push(numbers[i])
//     }
// }
// for( let i = 0; i < evenIndexItems.length; i++ ){
//     sumEvenValues += evenIndexItems[i]
// }
// const averageEvenItemsValues = sumEvenValues/evenIndexItems.length
// console.log(averageEvenItemsValues.toFixed(2))


// 9
// let value = 0;
// const numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// for(let i = 0; i < numbers.length; i++){
//    if(numbers[i] % 2 !== 0){
//     value -= numbers[i]
//    }else{
//        value += numbers[i]
//    }
// }
// console.log(value)







