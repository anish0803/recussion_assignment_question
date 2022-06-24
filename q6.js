// -------------Print sum of all the numbers in the given range--------------

// function sum_range(num1,num2,total){ 
//     if(num1<=num2){ 
//            total=total+num1; 
//           return sum_range(num1+1,num2,total); 
//      } 
//       return total; 
//    } 
//     console.log(sum_range(1,10,0));





    function sum_range(num1,num2){ 
        if(num1>num2){ 
            return 0;
             
         } 
          return num1+sum_range(num1+1,num2); 
       } 
        console.log(sum_range(1,10));
  