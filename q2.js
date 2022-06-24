// -------Print all the numbers in descending order in the given range-----------

function range (a,b){
   
    console.log(a);
    while(a>b){
        return range (a-1,b);
    }
}
range (30,1);