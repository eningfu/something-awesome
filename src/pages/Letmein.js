import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Letmein() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);
  const [hint, setHint] = useState(false);

  const handleConfirm = () => {
    if (answer === "1") {
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

  const [userInput, setUserInput] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(userInput);
  };

  function secret() {
    alert("found me");
  }
  window.secret = secret;
  
  return (
    <>
      <div>
        <Header text="[1/1] Let Me In"/>
        <div style={{ backgroundColor: "white", height: "10px", width: "85%" }}></div>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; This website was also opened in the background. I snooped around for a bit and I think we need to run a so called secret() function. Do you know to? </p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What does the alert say?</p>
            <p class="example">Format: if you think the answer is "Hello you are cool", type in helloyouarecool in lowercase</p>
          </div>

          <div style={{ margin: "auto", padding: "30px", width: "600px", backgroundColor: "white" }}>
            <div style={{ backgroundColor: "navy", height: "40px", margin: "-30px -30px 30px -30px", color: "white", padding: "10px" }}>
              <h2 style={{ margin: "auto" }}>hello and welcome :)</h2>
            </div>
            <form onSubmit={handleSubmit} style={{ textAlign: "left", margin: "auto", color: "black", fontFamily: "monospace" }}>
              <label>
                Alert me:
                <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} style={{ width: "60%" }}/>
              </label>
              <button type="submit">Submit</button>
            </form>

            {/* purposely make it vulnerable to xss */}
            <div style={{ textAlign: "left", margin: "auto", color: "black", fontFamily: "monospace" }}>
              <p>You said: </p>
              <div dangerouslySetInnerHTML={{ __html: output }}></div>
            </div>
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
              <p id="response">^_^ &gt; Nice work! We shall pass this information on.</p>
              <button><a href="/sqli">next &gt;</a></button>
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
              <p class="hint">Try looking at the </p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>
                BRAH
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
