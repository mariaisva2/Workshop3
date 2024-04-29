function getCounter() { 
    var counter = 0; declaro
    return function(){
        return counter++;
    }
}
var count = getCounter();

console.log(count());
