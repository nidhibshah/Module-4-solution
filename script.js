(function () {

var names = ["Jiya", "Nidhi", "Jaitik", "bhavesh", "jiyansh", "juhi", "Guggi", "jay", "jharna", "jil"];


for (var i = 0; i < names.length; i++) {

 
  var firstLetter = names[i].charAt(0).toLowerCase();

 
  if (firstLetter === 'j') {
  //alert(i+" "+names[i]);
    byeSpeaker.speak(names[i]);
  } else {
 //alert(i+" "+names[i]);
    helloSpeaker.speak(names[i]);
  }
}

})();
