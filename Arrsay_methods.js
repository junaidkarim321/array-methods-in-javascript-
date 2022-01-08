// const grocaryList = [
//     { name: "ali", price: "1", catogray: "fruits" },
//     { name: "akakkkk", price: "3", catogray: "misc" },
//     { name: "jjjjjjj", price: "4", catogray: "vege" },
//     { name: "iiiiiii", price: "5", catogray: "fruits" },
//     { name: "ssddsadad", price: "2", catogray: "vege" }

// ];
// console.log(grocaryList)



// .....................................................................
//    this is i used for the incude and other methods 

const numbers =[1,2,3,,4,5,6,]
const letter =['a','b','c','d','e']



// ...............................................................


const flat=[1,2,3,3[4,354,6]]
const flatthreearray=[1,2,3,3[4,354,[2,455,],6]]
const flatmap=[1,32,,45,545,[2]]







//// the first arrray method forEach
/// it will  prient the statment in the console
/// forEach
// grocaryList.forEach(item => {
//     console.log(`the price for ${item.name}is ${item.price} `);
// })








// array mwthod map
// map method will return anthore array  
//  const newprice= grocaryList.map(item => {
//         return{
//             name :item.name, price:item.price*3
//         }
//     })
//      console.log(newprice);








//  anthor method filter method 
// filter method i will use  to  return the item i need
//  const fruitslist = grocaryList.filter(items=>{
//  return items.catogray==="fruits";
//  })
//  console.log(fruitslist);

//  it will give me array of only fruits 









// another method is find 
// find and filter work same but  find will stope if it find the first index or  which first come it stip there ;
// if i want only the index number than it will return  only indexnumber 
// const result =grocaryList.find(item =>{
//     return(item.catogray.toLowerCase()==="fruits");

// });
// console.log(result);





//  anthor method is sort
// it will sort the array and will return the array
// it show price in sequenc and  
//  const sortedarry=grocaryList.sort((a,b)=>{
//      return a.price-b.name
//  })
//  console.log(sortedarry)







// another method is some and every 
// avery method wil check the every value in array it wil return if all values are greate than 50
// some method will return Boolean true or false 
//  const checkPrice =grocaryList.some(item=>{
//      return item.price> 50;

//      //it wil retun fasle we dont have any value great than 50 because there is no any value 
//  })
//  console.log(checkPrice);






// another reduce 
// if i want to sum value in array i will use reduce method 
//  const initalvalue=0;
//  const total =grocaryList.reduce((currenttotal ,items)=>{
//      return items.price+currenttotal;
//  },initalvalue);

// console.log(total);
/// it wil return this value 254310







//another method is includes
// through the includes we able to find the value is present in the  array or not 
// it will return ture if it is in the array i not it will return fasle if it is not present in the array 

// console.log(numbers.includes(5));

// it will return true because it is in the array 
// note the number is defined the above at the top 







// another methdes are concat 
// it will add both  array numbers and letter 
// console.log(numbers.concat(letter));






// another method is flat 
// if there is another in the array if i want to add both than i will use falt methods 
// console.log(flat.flat());
// it will return  another arry by adding both array 





// another method is flat 
// if there is three or more than three in the array if i want to add both than i will use falt methods 
// console.log(flatthreearray.flat(2));
// it will return  another arry by adding both array 




// another method is faltmap method
// it also call chaning of array 
// if we want to do any operaction on single value of array than we will use the flatMap
 console.log(flatmap.flatMap(num=>{
     return num*10;
 }))