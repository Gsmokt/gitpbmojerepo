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
// console.log(func(array))



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
// const square = (a,b) => ({ 
//   ad: a+b,
//   substr: a-b,
//   mult: a*b,
//   div: a/b, 
// });

// console.log(square(1,2))