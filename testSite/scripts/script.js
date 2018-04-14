function addClass(obj, cls) {
   var mass = obj.className.split(' ');
}

var obj = {
   className: 'open menu'
};

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'
addClass(obj, 'me');
addClass(obj, 'new');
addClass(obj, 'menu');
addClass(obj, 'qwert');

alert(obj.className); 