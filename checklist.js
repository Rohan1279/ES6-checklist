// 2
// const object = {
//     name: 'x',
//     age:13,
//     id:1231,
// }
// const x =2, y=3;
// console.log(`x is ${x} & y is  ${y}`);
// console.log(`${object.name} & ${object.age}`);

// 3
// const arrow1 = (nums)=>{
//     return nums*5
// } 
// // console.log(arrow1(2));
// const arrow2 = (first,second)=>(first+2)*(second*2);
// // console.log(arrow2(1,2));
// const arrow3 = (first,second,third)=>first*second*third;
// console.log(arrow3(1,2,3));

// 5
// const  arr = [1,2,3,4,5];
// const fiveTimes = arr.map(num=> num*5);
// console.log(fiveTimes);

// 6
// const  arr = [1,2,3,4,5];
// const odds= arr.filter(num=>num%2!=0)
// console.log(odds);

// 7
// const products = [
//     {name:'iwatch', price:120},
//     {name:'iPhone', price:1200},
//     {name:'iMac', price:5000},
// ]
// const iMac = products.find(product=> product.price==5000);
// console.log(iMac);

// 8
// const fish = {
//     name: 'hilsha',
//     address: 'chandapura',
//     color: 'silver',
//     phone: 01231231,
//     price: 4000
// }
// const {name,address} = fish;
// console.log(name,address);

// 9
// const  arr = [1,2,3,4,5];
// const [first,second,third] = arr;
// // const [third] = arr[2];
// // console.log(first);
// console.log(third);

// 10
// function add(first,second,third=7) {
//     return first+second+third;
// }
// console.log(add(1,2,0));

// 11
// const fish = {
//     name: 'hilsha',
//     address: 'chandapura',
//     color: 'silver',
//     phone: 01231231,
//     price: 4000,
//     description : [123,123,5436],
//     marks:{
//         physics: 82,
//         bangla:{
//             bangla1st: 79,
//             bangla2nd: 89
//         }
//     }
// }

// console.log(fish.marks.bangla?.bangl2nd);
// console.log(fish.description);
