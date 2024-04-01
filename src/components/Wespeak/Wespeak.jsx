import { useState } from "react";
import "./main.css";
import { convertSpeaking } from "./scripts/speak.js";
import { convertSpoken } from "./scripts/spoken.js";

export const Wespeak = () => {
  const [display, setDisplay] = useState("");

  return (
    <>
      <h1>Wespeak</h1>
      <div id="main-field">
        <div id="speaking-field">
          <p>Speak</p>
          <input type="text" id="speaking-input" placeholder="Speak: " />
          <input
            type="text"
            id="speaking-number-input"
            placeholder="Number: "
          />
          <button
            type="submit"
            id="submit-speak"
            onClick={() => {
              const speakingValue =
                document.getElementById("speaking-input").value;
              const speakingNumValue = document.getElementById(
                "speaking-number-input"
              ).value;
              const convertedFromSpeaking = convertSpeaking(
                speakingValue,
                speakingNumValue
              );
              setDisplay(convertedFromSpeaking);
            }}
          >
            Submit
          </button>
        </div>
        <div id="spoken-field">
          <p>Spoken</p>
          <input type="text" id="spoken-input" placeholder="Spoken: " />
          <input type="text" id="spoken-number-input" placeholder="Number: " />
          <button
            type="submit"
            id="submit-spoke"
            onClick={() => {
              const spokenValue = document.getElementById("spoken-input").value;
              const spokenNumValue = document.getElementById(
                "spoken-number-input"
              ).value;
              const convertedFromSpoken = convertSpoken(
                spokenValue,
                spokenNumValue
              );
              setDisplay(convertedFromSpoken);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <p
        id="output"
        onClick={(event) => {
          try {
            navigator.clipboard.writeText(event.target.innerHTML);
          } catch (error) {
            window.alert("copy error");
          }
        }}
      >
        {display}
        {/* <div className="copy-btn"></div> */}
      </p>
    </>
  );
};
