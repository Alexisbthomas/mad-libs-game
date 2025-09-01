onEvent("nextBtn", "click", function(){
var pluralNoun = getValue("pnoun");
var noun1 = getValue("noun1");
var noun2 = getValue("noun2");
var song = getValue("song");
var verb = getValue("verb");
var madLib = "Learning to drive is a tricky process. There " +
             "are a few rules you must follow.\n\n" +
             "1. Keep two " + pluralNoun + " on the steering " +
             "wheel at all times.\n\n2. Step on the " + noun1  +
             " to speed up and the " + noun2 +  " to slow down.\n\n" +
             "3. Your parents will just LOVE it if you play " +
             song + " on the radio.\n\n4. Make sure to honk " +
             "your horn when you see " +  verb +  " on a street sign.";
setText("displayOutput", madLib);
document.getElementById("madLibInputs").classList.add("d-none");
document.getElementById("madLibOutput").classList.remove("d-none");

});
onEvent("playBtn", "click", function(){
setText("pnoun", "");
setText("noun1", "");
setText("noun2", "");
setText("song", "");
setText("verb", "");
});