import { convertSpeaking } from "./speak.js";
import { convertSpoken } from "./spoken.js";
const submitSpeakButton = document.getElementById("submit-speak");
const submitSpokeButton = document.getElementById("submit-spoke");
const outputElement = document.getElementById("output");
const copy = require("clipboard-copy");

//Anything that we wanna do we can do with the right information

submitSpeakButton.addEventListener("click", () => {
  const speakingValue = document.getElementById("speaking-input").value;
  const speakingNumValue = document.getElementById(
    "speaking-number-input"
  ).value;
  const convertedFromSpeaking = convertSpeaking(
    speakingValue,
    speakingNumValue
  );
  outputElement.textContent = convertedFromSpeaking;
});
submitSpokeButton.addEventListener("click", () => {
  const spokenValue = document.getElementById("spoken-input").value;
  const spokenNumValue = document.getElementById("spoken-number-input").value;
  const convertedFromSpoken = convertSpoken(spokenValue, spokenNumValue);
  outputElement.innerHTML = convertedFromSpoken;
});
