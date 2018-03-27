var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var para = document.querySelector('p');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for (var i = 1; i <= 5; i++){
  var newImage = document.createElement('img');
  var srcImage = "images/pic" + i + ".jpg";
  newImage.setAttribute('src', srcImage);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', setImage);
}

function setImage(e){
  var currentImage = e.target.getAttribute('src');
  displayedImage.setAttribute('src', currentImage);
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
  btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Dark';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}