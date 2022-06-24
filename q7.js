

// ------- Print the product of all the numbers in given range------ 
  
 function product_range(x,y,product){ 
     if(x<=y){ 
         product= product *x; 
         return product_range(x+1,y,product); 
     } 
     return product; 
  
 } 
 console.log(product_range(1,5,1));
