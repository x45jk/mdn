function pow(x, n) {
    var result = 1;
  
    for (var i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}

function arrFunction() {
  var array = new Array(4);
  array[0] = 'a';
  array[4] = 'b';
  array[7] = 7;

  console.log(array);
}

var arr = ["Я", "изучаю", "JavaScript"];

var mass = arr.splice(1, 1); // начиная с позиции 1, удалить 1 элемент

alert( mass ); //  осталось ["Я", "JavaScript"]