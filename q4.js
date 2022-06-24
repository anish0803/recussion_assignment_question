// ---------Find the factorial of a given number n---------

function y (num,fact){
    if (num > 0){
        fact *= num;
       
        return y (num - 1,fact);
        }
    return fact ;
    }
console.log(y(8,1));