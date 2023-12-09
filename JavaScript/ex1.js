// let x="hello world"
// x=20
// x=true
// x=[10,32,"sf",2.3,true]
//const s=44
// var s = 10
// {
//   let  s = 15  
//   console.log("s= ",s);
 
// } 
// console.log("s= ",s);

//hoisting
// console.log(x);
// var x=10;



// function
// function add(x,y){
//  return x+y;
// }
// let result=add(10,"Html",10,30)
// console.log(result)

//Default Function
// function sum(x=10,y=20){
//     return x+y
// }
// console.log(sum())
// console.log(sum(100))
// console.log(sum(100,200,500))


// function total(...nums)
// {
//     let sum = 0;
//     for(let i=0;i<nums.length;i++)
//     {
//         sum = sum+nums[i];
//     }
//     return sum;
// }
// console.log(total(1,2,3,4,5,6))
let arr=[1,2,3,4,5]
function reverse(arr){
    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i])
    }
}
reverse(arr)
