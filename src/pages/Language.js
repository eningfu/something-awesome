import { useState } from 'react';
import Header from './components/Header';
import sol from './images/languagesol.png'
// import Nav from './components/Nav';

export default function Language() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);
  const [hint, setHint] = useState(false);

  const handleConfirm = () => {
    if (answer === "gotspotted") {
      setSubmitted(true);
      setIncorrect(false);
      setSolution(true);
      setHint(false);
    } else {
      setIncorrect(true);
      setSubmitted(false);
    }
  };

  const handleSolution = () => {
    if (solution) {
      setSolution(false);
    } else {
      setSolution(true);
    }
  }

  const handleHint = () => {
    if (hint) {
      setHint(false);
    } else {
      setHint(true);
    }
  }

  return (
    <>
      <div>
        <Header text="[2/2] Language"/>
        <div style={{ backgroundColor: "white", height: "10px", width: "83%" }}></div>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; We found this message in their inbox, here is what it said. The contents are a bit strange but we sense something is there...</p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What does it say?</p>
            <p class="example">Format: if you think the answer is "Hello you are cool", type in helloyouarecool in lowercase</p>
          </div>

          <div style={{ textAlign: "left", margin: "auto", padding: "30px", width: "600px", backgroundColor: "white", color: "black", fontFamily: "monospace" }}>
            <p>
            Ԍood afternоon,
            <br/>
            <br/>
            Тirana iѕ no good. I hoрe you can understand. I have to detоur to Тbilisi first. 
            Тhen, and only thеn, can I ԁeliver it to you.
            <br/>
            <br/>
            Y.
            </p>
          </div>

          <div class="answerbox">
            <input 
              id="stegaanswer"
              value={answer} 
              onChange={(e) => setAnswer(e.target.value)} 
              placeholder="Enter answer"
            />
            <button class="checker" id="stegacheck" onClick={handleConfirm}>confirm &gt;</button>
          </div>

          
          {submitted && (
            <div class="silkscreen-regular" id="char">
              <p id="response">^_^ &gt; Nice work! We shall pass this information on. So it seems that the suspect thinks we've seen them before and warned their ally...</p>
              <button><a href="/xss">next &gt;</a></button>
            </div>
          )}

          {incorrect && (
            <div class="silkscreen-regular" id="char">
              <p id="error">Wrong answer. Please try again.</p>
              <button onClick={handleHint}>hint?</button>
              <button onClick={handleSolution}>solution</button>
            </div>
          )}

          {hint && (
            <div class="silkscreen-regular">
              <p class="hint">There’s actually a terminal command that tells you more about a character’s Unicode script.</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>At first glance, this looks like a normal text paragraph but we know that something is wrong. The biggest clue 
                for us is knowing that this is a steganography challenge. Everything hints at a language or character analysis, 
                which suggests that some characters might not be in the standard Latin alphabet.
                <br/><br/>
                Homoglyphs are characters that look alike but originate from different scripts. For example, the Latin letter "G" 
                and the Cyrillic letter "G" appear visually identical but have different Unicode representations. This can be a 
                clever technique for hiding messages, as they can easily slip past casual observers who are looking for typical Latin text.
                <br/><br/>
                Luckily for us, there’s actually a terminal command that we can use to check which script the character belongs to - 
                unicode. We first sudo apt install unicode if we do not have it, and then just run unicode “text”. We can even see 
                that the capital G changes appearance due to the font.
              </p>
              <img class="photo" src={sol} alt="solution"/>
              <p>
              After checking each word in the terminal, we see that the “G” in Good, “o” afternoon, “T” in Tirana, “s” in is, “p” 
              in hope, “o” in detour, “T” in Tblisi, “T” in then, “e” in then, and “d” in deliver are actually Cyrillic and not Latin. 
              They spell out “got spotted”.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
