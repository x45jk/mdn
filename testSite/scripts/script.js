var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertX: went for a walk. \
                 When they got to :insertY:, they stared in horror for a few moments, \
                 then :insertZ:. Bob saw the whole thing, but he was not surprised — \
                 :insertX: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var insertY = ["the soup kitchen", "Disneyland", "the White House"];
var insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertX:/g, xItem);
  newStory = newStory.replace(/:insertY:/g, yItem);
  newStory = newStory.replace(/:insertZ:/g, zItem);

  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(21.42857);
    var temperature =  Math.round(34.44444);
    newStory = newStory.replace(/300 pounds/g, weight+' stone');
    newStory = newStory.replace(/94 farenheit/g, temperature+' centigrade');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
