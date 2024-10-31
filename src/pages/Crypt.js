import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Crypt() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);

  const handleConfirm = () => {
    if (answer === "answer") {
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

  return (
    <>
      <div>
        <Header text="Cryptography"/>
        {/* <Nav/> */}
        <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            Cryptography is the practice of securing information by transforming it into an 
            unreadable format, ensuring that only authorized parties can access it. 
            <br/>
            <br/>
            The Caesar cipher, one of the earliest and simplest encryption methods, works by 
            shifting the letters of the alphabet by a fixed number of positions. For example, 
            with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. The same shift is 
            applied to each letter in the plaintext to create the ciphertext. To decrypt the 
            message, the receiver simply shifts the letters back by the same amount. Despite 
            its simplicity, the Caesar cipher laid the foundation for more complex encryption 
            techniques used today.
          </p>
        </div>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; Okay, we didn't catch the suspect, but we actually found some 
            scrap pieces of paper at all of those sites. I think they piece together like a jigsaw but it still doesn't make any sense...</p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What does the letter say?</p>
          </div>

          <div>
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
              <p id="response">^_^ &gt; Nice work! We shall pass this information on. Guess we are heading to Europe.</p>
              <button><a href="/sqli">next &gt;</a></button>
            </div>
          )}

          {incorrect && (
            <div class="silkscreen-regular" id="char">
              <p id="error">Wrong answer. Please try again.</p>
              <button onClick={handleSolution}>solution</button>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>bruh</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
