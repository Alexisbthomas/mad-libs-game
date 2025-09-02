const nextBtn = document.getElementById("nextBtn");
const playBtn = document.getElementById("playBtn");

// Assuming you have these elements in your HTML
const pluralNoun = document.getElementById("pnoun");
const noun1 = document.getElementById("noun1");
const noun2 = document.getElementById("noun2");
const song = document.getElementById("song");
const verb = document.getElementById("verb");
const madLibInputs = document.getElementById("madLibInputs");
const madLibOutputContainer = document.getElementById("madLibOutput");
const madLibOutputText = document.getElementById("madLibOutputText"); // An inner element for the text

// The Next button shows the mad lib and hides the inputs.
nextBtn.addEventListener("click", () => {
    var pluralNounValue = pluralNoun.value;
    var noun1Value = noun1.value;
    var noun2Value = noun2.value;
    var songValue = song.value;
    var verbValue = verb.value;

    var madLib = "Learning to drive is a tricky process. There " +
                 "are a few rules you must follow.\n\n" +
                 "1. Keep two " + pluralNounValue + " on the steering " +
                 "wheel at all times.\n\n2. Step on the " + noun1Value +
                 " to speed up and the " + noun2Value + " to slow down.\n\n" +
                 "3. Your parents will just LOVE it if you play " +
                 songValue + " on the radio.\n\n4. Make sure to honk " +
                 "your horn when you see " + verbValue + " on a street sign.";
    
    // Set the output text
    madLibOutputText.textContent = madLib;

    // Hide the input fields and show the output container
    madLibInputs.classList.add("d-none");
    madLibOutputContainer.classList.remove("d-none");
});

// The Play Again button resets the game by hiding the output and showing inputs.
playBtn.addEventListener("click", () => {
    // Clear all input values
    pluralNoun.value = "";
    noun1.value = "";
    noun2.value = "";
    song.value = "";
    verb.value = "";

    // Show the input fields and hide the output container
    madLibInputs.classList.remove("d-none");
    madLibOutputContainer.classList.add("d-none");
});