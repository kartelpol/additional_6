module.exports = function zeros(expression) {
 var arr = expression.split("*");

  var tens =0;
  var two = 0;
  var fives = 0;  
  var zero = 0;

  for (var i = 0; i < arr.length; i++){
   
    if (arr[i].indexOf("!!", 0) + 1 ){

      var numb = arr[i].substring(0, arr[i].length - 2);
      arr[i] =+ numb;
      
      if(arr[i] % 2 === 0){
        if(arr[i]>=10 && arr[i]<100)
        tens = tens + Math.floor(arr[i]/10);
      else{
        if(arr[i]>99) tens = tens + Math.floor(arr[i]/10) + 1;
      }
      
        for (var j=0; j <= arr[i] ; j+=2){
          var cifr =j;
          if(j == 50)
            fives++;
          while ((cifr % 2 == 0) && (cifr % 10 != 0) ){
            two++;
            cifr = cifr / 2;
            }
        } 
      }
      else { 
         for (var j = 1; j < (arr[i] + 1); j+=2){
          var cifr =j;
              while ( cifr % 5 === 0){
                fives++;
                cifr /= 5;
              }
        }
    }
 }

   else {
    var numb = arr[i].substring(0, arr[i].length - 1);
    arr[i] =+ numb;
 
    for (var k = 1; k <= arr[i]; k ++){
      var cifr = k;
        while ( cifr % 5 === 0){
          fives++;
          cifr /= 5;
        }
          while ( cifr % 2 === 0){
          two++;
          cifr /= 2;
        }
    }

  }
}

      if(fives < two) {
        zero = fives + tens;
      }
      else 
        zero = two + tens;
   return zero;
}
