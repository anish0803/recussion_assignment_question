// -------Print all the even numbers in the given range--------

function even (a,b){
   
    if (a<=b) {
        if (a%2!==1){
        console.log(a);
        return even (a+1,b);
    }
    return even (a+1,b);
  }
  }
  
  even(1,20);