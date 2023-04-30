console.log("\n\n    task  1   \n \n"); 
for (var i = 1; i <= 10; i++) {
    console.log(i);  
    }
    
    
console.log("\n\n    task  2   \n \n"); 


    var i =1;
    while( i<=10){
        console.log(i);  
        i++;
    }


console.log("\n\n    task  3   \n \n"); 



    var arr = [1,2,3,4,5]
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);  
        }


 console.log("\n\n    task  4   \n \n"); 


 for (var i = 0; i <= 10; i++) {
     if (i%2==0)
     console.log(i);  
     }


console.log("\n\n    task  5   \n \n"); 


            var sum=0;
  for (var i = 0; i <10; i++) {
      sum=i+sum;
      sum++; 
      }
     console.log(sum); 
     
     
 console.log("\n\n    task  6   \n \n"); 
 
 

 var arr = [1,2,3,4,5]
 var max =arr[0];
for (var i = 1; i < arr.length; i++) {
    if(max<arr[i])  
    max=arr[i];
    }
    console.log(max);  



console.log("\n\n    task  7   \n \n"); 


 var arr = [5,4,3,2,1];
 var min =arr[0];
for (var i = 1; i < arr.length; i++) {
 if(min>arr[i])  
 min=arr[i];
 }
 console.log(min); 
 
 
 console.log("\n\n    task  11   \n \n"); 



 var arr = [1,2,3,4,5]
 var average , num=0;
 console.log(arr);
for (var i = 0; i < arr.length; i++) {
   num+=arr[i];   
    }
    average=num/arr.length;
    console.log(average);
     


 console.log("\n\n    task  12   \n \n");
 
 


    var factorial=1 ; 
    for (var i = 1; i <= 5; i++) {
      factorial*=i;
        }
        console.log(arr);
        console.log(factorial); 
    
        

 console.log("\n\n    task  13   \n \n");
 
 

        var n1,n2 ,num=0;
        for (var i = 0; i < 10; i+=2) {
            if (i==0 ){
            n1=i;
            n2=++i;
            console.log(n1);
            console.log(n2);}
            num=n1+n2;
            n1=n2;
            n2=num;
            console.log(num);  
            }
            


 console.log("\n\n    task  14   \n \n"); 


            var arr1 =[];
            for (var i = 0; i <= 20; i++) {
                arr1.push(i);
                }
                console.log(arr1)  ;
                var p=0;
                
                for (var i = 0; i <20; i++) {
                    p=0;
                    for (var j = 2; j <=20; j++) {
                      num =arr1[i]/j;
                    
                    if (!Number.isInteger(num) && arr1[i]!=j && arr1[i]!=1)
                { 
                    p++;
                    if(p==18)
                    console.log(arr1[i]+"      -_-")
                    }
                
                }
                    }
    
 console.log("\n\n    task  15   \n \n"); 



                    for (var i = 1; i <= 10; i++) {
                        console.log("5 x "+ i + " = "+5*i )
                        }    


console.log("\n\n    task  16   \n \n");  


            let arr2=[[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            console.log(arr2)
            for (var i = 0; i <arr2.length; i++) {
                for (var j = 0; j <arr2.length; j++) {
                   console.log (arr2[i][j]) ;
                    } 
                } 
  
 
console.log("\n\n    task  17   \n \n"); 



            var arr = [];
                for (var i = 0; i<=5; i++) {
                  arr.push(i) ;
                    } 
                    console.log(arr) ;



console.log("\n\n    task  18   \n \n"); 


               var arr =[];
                    for (var i = 5; i>=0; i--) {
                        arr.push(i) ;
                          } 
                      console.log(arr) ;
 

console.log("\n\n    task  19   \n \n"); 


            var arr = [];
            for (var i = 1; i<=5; i++) {
              arr.push(i) ;
                } 
                console.log(arr) ;
                for (var i = 0; i<=4; i++) {
                if (2<=i &&i<=4){
                    console.log(arr[i]);
                }
                    } 



  console.log("\n\n    task  20   \n \n"); 
    


             console.log(arr) ;
            
             for (var i = 0; i<arr.length; i++) {
               if (arr[i]==4)
               {
                console.log("true");
               }
                 } 
        
                 

console.log("\n\n    task  21   \n \n"); 



                 var arr =  [1, 2, 1, 3, 2, 1] ,  frequency=0;
                 for (var i = 0; i<=5; i++) {
                   if (arr[i]==1){
                    frequency++; }
                
                } 

                console.log( arr);
                console.log( frequency);
               