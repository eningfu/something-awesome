import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';
import wallpaper from './images/wallpaper.jpg';
import sol from './images/hidden.png';
import sol1 from './images/hidden1.png';
import sol2 from './images/hidden2.png';

export default function Hidden() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);
  const [hint, setHint] = useState(false);

  const handleConfirm = () => {
    if (answer === "1.618") {
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
        <Header text="[1/2] Hidden"/>
        <div style={{ backgroundColor: "white", height: "10px", width: "66%" }}></div>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; Found a computer but we still need a password. What an interesting wallpaper... think there's something hidden?</p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What does it say?</p>
            <p class="example">Format: if you think the answer is Hello you are cool, type in helloyouarecool in lowercase</p>
          </div>

          <img class="photo" src={wallpaper} alt="wallpaper"/>

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
              <p id="response">^_^ &gt; Nice work! We shall pass this information on.</p>
              <button><a href="/language">next &gt;</a></button>
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
              <p class="hint">There are a lot of tools dedicated to steganography that can be used in our terminal.</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>
                We start by downloading this image. There are several tools available to us to detect steganography in our teminals. 
                The one we will use is called steghide (sudo apt install steghide first if we don’t have it). We run 
                the following command in our terminal:
              </p>
              <code>steghide extract -sf wallpaper.jpg -xf data.txt</code>
              <br/>
              <img class="photo" src={sol} alt="wallpaper" style={{ marginTop: "20px" }}/>
              <p>
                But we discover the file is password protected, and we encounter a prompt asking for the password. 
                Of course we don’t know the password but there is a way to brute force it - using Stegcracker or Stegseek (sudo 
                apt install stegcracker/stegseek first if we don’t have it). This tool is specifically designed to brute-force 
                Steghide passwords. We just need a wordlist, and one of the most commonly used lists is rockyou.txt. 
                Now we try this command in our terminal.
              </p>
              <code>stegcracker wallpaper.jpg rockyou.txt</code>
              <br/>
              <img class="photo" src={sol1} alt="wallpaper" style={{ marginTop: "20px" }}/>
              <p>
                After a while, we see that the password that was used for steghide was ‘summertime’, and now a new file 
                that contains the secret information has been created. We can cat the new file, revealing the contents 
                as ‘golden ratio (4 sf)’ - making the answer 1.618.
              </p>
              <img class="photo" src={sol2} alt="wallpaper"/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
