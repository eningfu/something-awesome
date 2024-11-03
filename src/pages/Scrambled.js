import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';
import imgsol from './images/scrambled1.png';
import imgsol2 from './images/scrambled2.png';
import imgsol3 from './images/scrambled3.png';
import imgsol4 from './images/scrambled4.png';
import imgsol5 from './images/scrambled5.png';
import imgsol6 from './images/scrambled6.png';
import imgsol7 from './images/scrambled7.png';

export default function Scrambled() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);
  const [hint, setHint] = useState(false);

  const handleConfirm = () => {
    if (answer === "worcestershire") {
      setSubmitted(true);
      setIncorrect(false);
      setSolution(true);
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

  // eslint-disable-next-line
  const text = "4&$<<3g(&e*3&f*3p!&ge&2$<(.&\ae&!*p'}&e*3&1*g(&4p<4!(?&}a(&k$<<1*!(&4<&;vrt.";
  const text1 = "By either using a frequency analysis tool (such as https://www.dcode.fr/frequency-analysis) or by hand, we find that ‘&’, ‘<’, ‘(‘ and ‘*’ appear frequently, with ‘&’ appearing double the amount of times as ‘<’ - which highly suggests that it represents a space."
  const text2 = "With this information, we can substitute ‘&’ for space. The other frequent characters are not suitable as ‘<’ appears twice in a row and ‘(‘ creates words of length greater than 4. This gives us:"
  // eslint-disable-next-line
  const text3 = "three letter words ‘e*3’, ‘\ae’, and ‘}a‘"
  // eslint-disable-next-line
  const text4 = "Based on the positioning of ‘(‘ in ‘}a(‘ and the frequency of ‘(‘, I am inclined to believe that ‘(‘ is ‘e’ - making ‘}a(‘, ‘the’. This now means that ‘\ae’ is likely to be ‘who’ or ‘why’ based on common 3 letter words, but when we take a look at ‘e*3’ there is no suitable word begins with ‘o’, suggesting that ‘\ae’ is ‘why’. Then making ‘e*3’ likely to be ‘you’."
  const text5 = "The double letters are likely to be ‘s’ due to its frequency. When we substitute this in, ‘$<<3g(‘ seems to be assume, leaving ’4’ to be ‘i’. ‘4p<4!(?’ also seems like it would be ‘inside’ and ‘1*g(‘ to be ‘come’."

  return (
    <>
      <div>
        <Header text="[1/1] Scrambled"/>
        <div style={{ backgroundColor: "white", height: "10px", width: "42%" }}></div>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; Okay, we didn't catch the suspect but we did find their hideout with a keypad. Look! There's another letter under the mat.
            The letters fit together like a jigsaw but it still doesn't make any sense... and I think the password's on here.</p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What is the password?</p>
            <p class="example">Format: if you think the password is "hello", type in hello in lowercase</p>
          </div>

          <div style={{ textAlign: "left", margin: "auto", padding: "30px", width: "600px", backgroundColor: "white", color: "black", fontFamily: "monospace" }}>
            <p>
            {text}
            </p>
          </div>

          <div class="answerbox">
            <input 
              id="cryptanswer"
              value={answer} 
              onChange={(e) => setAnswer(e.target.value)} 
              placeholder="Enter answer"
            />
            <button class="checker" id="cryptcheck" onClick={handleConfirm}>confirm &gt;</button>
          </div>

          {submitted && (
            <div class="silkscreen-regular" id="char">
              <p id="response">^_^ &gt; Nice work! We shall pass this information on. Never tried the sauce before.</p>
              <button><a href="/steganography">next &gt;</a></button>
            </div>
          )}

          {incorrect && (
            <div class="silkscreen-regular" id="char">
              <p id="error">Wrong answer. Please try again. (Remember to use lowercase)</p>
              <button onClick={handleHint}>hint?</button>
              <button onClick={handleSolution}>solution</button>
            </div>
          )}

          {hint && (
            <div class="silkscreen-regular">
              <p class="hint">Based on what we see, it seems like a substitution cipher. Do you know what's the best way to dicpher a substitution cipher?</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>First thing we do is try to recognise what cipher is being used. Based on what we see, it seems like a 
                substitution cipher that includes symbols, which means that we have to do the deciphering manually. A 
                common approach to solving substitution ciphers is frequency analysis - analyzing the frequency of symbols 
                and mapping them to common letters in English (like 'e', 't', 'a', etc.). We can also use a list of the 
                most common English words and focus on patterns to determine which symbol is matched with which letter. 
                We also must factor in the possibility that spaces are also replaced by another character.
              </p>
              <img class="photo" src={imgsol} alt="property"/>
              <p>
                {text1}
              </p>
              <img class="photo" src={imgsol3} alt="property" style={{ height: "300px" }}/>
              <img class="photo" src={imgsol2} alt="property" style={{ height: "300px" }}/>
              <p>
              I also looked at what the most commonly used words were in the English language by looking at Wikipedia's Most common words in English . 
              From this list, we see that the commonly used words are around 1-4 characters in length, so this could also help us determine the location of spaces.
              <br/>
              <br/>
              {text2}
              </p>
              <img class="photo" src={imgsol4} alt="property" style={{ width: "70%" }}/>
              <p>
                Here are some features we can notice:
                <ul style={{ textAlign: "left" }}>
                  <li>‘4’ is a single letter word, meaning it has to be either ‘a’ or ‘i’</li>
                  <li>two letter words ‘ge’ and ‘4&lt;’</li>
                  <li>{text3}</li>
                  <li>‘e*3’ appears twice</li>
                  <li>‘&lt;&lt;’ double letter in 2 words</li>
                </ul>
                {text4}
              </p>
              <img class="photo" src={imgsol5} alt="property" style={{ width: "70%" }}/>
              <p>
                {text5}
              </p>
              <img class="photo" src={imgsol6} alt="property" style={{ width: "70%" }}/>
              <p>
                The last couple words are made very obvious, and here is our final message.
              </p>
              <img class="photo" src={imgsol7} alt="property" style={{ width: "70%" }}/>
              <p>
                So our answer is worcestershire.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
