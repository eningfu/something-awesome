import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Canyouhearme() {
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
        <Header text="[2/2] Can You Hear Me"/>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; We found this file, here is what it said. The contents are a bit strange but we sense something is there...</p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What does it say?</p>
            <p class="example">Format: if you think the answer is Hello you are cool, type in helloyouarecool in lowercase</p>
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
              <button><a href="/canyouhearme">next &gt;</a></button>
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
              <p class="hint">brah</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>bra</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
