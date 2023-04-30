console.log("\n\n    task  1   \n \n");



for (var i=0 ;i<=50 ; i=i+2 ){
  process.stdout.write(`${i}   `);
}
var i=0 ;
while (i<=50){
  process.stdout.write(`${i}    `);
    i+=2;
}



console.log("\n\n    task  2   \n \n"); 



for (var i=1 ;i<=50 ; i=i+2 ){
  process.stdout.write(`${i}    `);
}
var i=1 ;
while (i<=50){
  process.stdout.write(`${i}    `);
    i+=2;
}



console.log("\n\n    task  3   \n \n"); 


for (var i=1 ;i<=50 ; i++ ){
    if (i%3==0 && i%5==0  ){
  process.stdout.write("FizzBuzz,  ");
}
if (i%3==0  ){
    process.stdout.write("Fizz,   ");
  }
 if ( i%5==0 ){
      process.stdout.write( "Buzz,   ");
    }  
else {
  process.stdout.write(`${i},    `);
}
} 



console.log("\n\n    task  4   \n \n"); 

 

function FizzBuzz (number) 
{
    if (number%3==0 && number%5==0  ){
        return "FizzBuzz   ";
      }
     if ( number%5==0 ){
   return "Buzz   " ;
        }  
        if ( number%3==0 ){
           return "Fizz";
          } 
    else {
   return number;
    }  
}
var i =1;
console.log ( "input : "+i);
  var result = FizzBuzz(i);
  console.log ( "output : "+result);
  var i =15;
  console.log ( "input : "+i);
    var result = FizzBuzz(i);
    console.log ( "output : "+result);


    console.log("\n\n    task  5   \n \n"); 

 

function FizzBuzz1 (number) 
{
    if ( number==5){
 return FizzBuzz1(4);
    }
    if (number%3==0 && number%5==0  ){
        return "FizzBuzz   ";
      }
     if ( number%5==0 ){
   return "Buzz   " ;
        }  
        if ( number%3==0 ){
           return "Fizz";
          } 
    else  {
   return number;
    }
}
var i =5;
console.log ( "input : "+i);
  var result = FizzBuzz1(i);
  console.log ( "output : "+result);
  

  console.log("\n\n    task  6   \n \n");
 var bank = [25,10,5 ,1]
 console.log (bank)
  for (var i=0 ;i<bank.length ; i++ ){

  }

  console.log("\n\n    task  7   \n \n");
  
  var bank =[25,10,5,1] , z=[];
 
  var number = 57 ;
  console.log(number+"   " +bank)
   for (var i =0 ; i<bank.length ;){
  if (number>=bank[i]) {
      z.push(bank[i]);
  number=number-bank[i];
  
  }
  if (number<bank[i]){
      i++;
  }
  
   }
   console.log(z);


   console.log("\n\n    task  8   \n \n");

   var string ="Coding Academy by Orange" , repeat_o=0;
   var arr = string.split("");
 
   console.log (arr);

   console.log(arr);
   for (let i=0 ; i<arr.length;i++ ){
    var char = arr[i];
if (char.toLowerCase()=="o") {
  repeat_o++;
}
   }
   
   console.log("repeat  \"o\" ");
   console.log(repeat_o);
  


   console.log("\n\n    task  9   \n \n");

   for (let i=0 ; i <= 20 ; i++){
    console.log (i)
   }

   
   console.log("\n\n    task  9-2     \n \n");

   for (let i=3 ; i <= 29 ; i+=2){
    console.log (i)
   }

   
   
   console.log("\n\n    task  9-3     \n \n");

   for (let i=12 ; i >= -14 ; i-=2){
    console.log (i)
   }


   console.log("\n\n    task  9-4     \n \n");

   for (let i=50 ; i >= 20 ; i--){
    if (i%3==0)
    console.log (i);
   }
 

   console.log("\n\n    task  10     \n \n");


   var arr =[7, 500, 'KH404', 'black', 36];
   var string ='CodingAcademy';
   var arr1= string.split("");
   for (let i = 0 ; i<arr.length ; i++) {
    console.log (arr[i]);
   }
   for (let i=arr1.length-1  ; i>=0 ; i--) {
    console.log (arr1[i]);
   }

   
   console.log("\n\n    task  11     \n \n");


var odd =[];
var even =[];
var number =[7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
for (let i = 0 ; i<number.length ; i++) {
  if (number[i]%2==0){
even.push(number[i])
  }
  if (number[i]%2 != 0){
odd.push(number[i])
  }
 }
 console.log (odd);
 console.log (even);


 console.log("\n\n    task  12     \n \n");

 var arr =['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
 var arr1 =['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
 var arr2 =['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
 var arr3 =['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
 var arr4 =['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
 var meal =[];
 for (let a =0;a<arr.length;a++ ){
  for (let b =0;b<arr1.length;b++ ){
    for (let c =0;c<arr2.length;c++ ){
      for (let d =0;d<arr3.length;d++ ){
        for (let i =0;i<arr4.length;i++ ){
    meal.push(arr[a]) 
    meal.push(arr1[b]) 
    meal.push(arr2[c]) 
    meal.push(arr3[d])
    meal.push(arr4[i]); 
  
     
}}}}}
console.log ("2");
var meal2=[],meal3=[]  , v=0 , t=5;
for (let i=0 ; i<t ; i++){
  meal2.push(meal[i])
}
console.log (meal2);
for ( i=5; i<t*2 ; i++){
  meal3.push(meal[i])

}
console.log (meal3);