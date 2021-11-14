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


// // 9
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

// const array = [1,6,23,8,4,8,3,7];
// let a = null;
// const ar = []
// const arr = []
// let c = null;
// const array2 = array.map((e, index) => {
//   if(index % 2 === 0){
//       a = array.slice(index, index + 1)
//       ar.push(...a)
//   }if(index % 2 !== 0){
//    a = array.slice(index, index + 1)
//    arr.push(...a)
//   }
//   c = parseFloat(ar[index] + arr[index])
// })
// console.log(a)
// console.log(ar
//    )
//    console.log(arr
//       )
//       console.log(c)

1
// const array = [1,6,23,8,4,8,3,7];
// const sum = (a) =>{
//  return a.reduce((prev, cur)=> prev + cur)
// }

// console.log(sum(array))

2
// const array = [1,6,23,8,4,8,3,7];
// const sum = (a) => {
  
//     return a[0] + a[a.length -1]
  
// }

// console.log(sum(array))


3
// function factorial (a){
//     let number = 1;
//     for(let i = 1; i <= a; i++){
//         number *= i;
//     }
//     return number
//     }
//     console.log(factorial(5));


4
// const array = [1,6,23,8,4,8,3,7];
// let i = array.length - 1;
// let j = null;
// const newArray = [];
// while(i >= 0){
//   j = array[i];
//   newArray.push(j);
//   i--;
// }
// console.log(newArray)


5
// const array = [1,6,23,8,4,8,3,7];
// const func = (array)=>{
// let i = 0;
// let j = 1;
// let substr = 0;
// const tab = [];
// while(i < array.length){
//   substr = array[i] + array[j];
//   tab.push(substr);
//   i += 2;
//   j += 2;
// }
// return tab
// }
// console.log(func(array))


6
// const array = [1,6,23,8,4,8,3];
// const func = (array)=>{
// let i = 0;
// let j = 1;
// let substr = 0;
// const tab = [];
// while(i <= array.length){
//   if( i < array.length && j < array.length ){
//   substr = array[i] + array[j];
//   tab.push(substr);
//   } else {
//     substr = array[i] + array[i];
//     tab.push(substr);
//   }

//   i += 2;
//   j += 2;
// }
// return tab
// }
// console.log(func(array));


7
// const array = [1,6,23,8,4,8,3,7];
// let min = 0;
// let max = array.length;
// let number = null;
// const random = (a) => {
//   let b = Math.floor(Math.random() * (max - min) + min );
//   number = array[b];
//   return number
// }
// console.log(random(array));


8
// const array = [1,6,23,8,4,8,3];
// const func = (a,b) =>  {
//   let i = 0;
//   let arr = 0;
//   let numb = Infinity; 
//   while(i < b){
//     const min = 0;
//     const max = a.length -1;
//     const random = Math.floor(Math.random() * (max - min + 1) + min );
//     if(a[random] < numb){
//       numb = a[random];
//       }
//     i++;
//   }
//   return numb
// }
// console.log(func(array,5))


9
// const array = [1,6,23,8,4,8,3,7];
// let number = null;
// const tab = [];
// const func = (array)=> {
//   for(let i = array.length; i > 0; i--){
//     let min = 0;
//     let max = array.length;
//     let b = Math.floor(Math.random() * (max - min) + min )
//     number = array.splice(b,1);
//     tab.push(...number)
//   }
//   return tab
// }
// console.log(func(array))


 10
// const array = [1,6,23,8,4,8,3,7];
// const func = (array) => {
//   let operation = array[0];
//   let i = 1;
  
//   while(i < array.length){
//     let min = 0;
//     let max = 1;
//     let b = Math.floor(Math.random() * (max - min + 1) + min )
    
//     switch(b){
//       case 0:
//         operation -= array[i];
//         break;
//       case 1:
//         operation += array[i];

//         break;
//     }
//     i++;
//   }
//   return operation
// }
// console.log(funk(array))



11
// const day = ()=> {
//   const days = ["Poniedziałek", "Wtorek", "Środa","Czwartek","Piątek","Sobota","Niedziela"]
//   const date = new Date()
//   const currentDay = days[date.getDay()-1]
//   return currentDay
// }
// console.log(day())


12
// const day = ()=> {
//   const days = ["Poniedziałek", "Wtorek", "Środa","Czwartek","Piątek","Sobota","Niedziela"];
//   const date = new Date();
//   let currentDay = date.getDay();
//   let daysTillFriday = 0;
//   let friday = days.indexOf("Piątek") + 1;
//   if(currentDay <= friday){
//     daysTillFriday = friday - currentDay
//   }else {
//     daysTillFriday = currentDay
//   }
//   return daysTillFriday
// }
// console.log(day())


13
// let square = (a,b) => ({ 
//   ad: a+b,
//   substr: a-b,
//   mult: a*b,
//   div: a/b 
// });

// console.log(square(1,2))






