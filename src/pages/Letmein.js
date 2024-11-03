import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';
import sol from './images/lmi.png';
import sol1 from './images/lmi1.png';
import sol2 from './images/lmi2.png';
import sol3 from './images/lmi3.png';
import sol4 from './images/lmi4.png';

export default function Letmein() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);
  const [hint, setHint] = useState(false);

  const handleConfirm = () => {
    if (answer === "100mnortheast") {
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
    alert("100m northeast");
  }
  window.secret = secret;

  const text = "'\"<h1>hi</h1> ";
  const text2 = "<button onclick=secret()>click me</button>";
  const text3 = "<img src=x onerror=secret()></img>";
  
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
              <p class="hint">Try inputting some HTML tags as well</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>
                The first step in exploiting the vulnerability is to experiment with various inputs to check for any sanitization measures in place. A good starting point is to use a straightforward input like:
              </p>
              <code>{text}</code>
              <p>
                This input serves multiple purposes:
                <ul style={{ textAlign: "left" }}>
                  <li>
                    It tests for JavaScript injection by including both single (') and double (") quotes
                  </li>
                  <li>
                    It checks for HTML injection by incorporating an HTML tag (&lt;h1&gt;)
                  </li>
                </ul>
                We can easily determine that it’s reflected xss that we are working with here.
              </p>
              <img class="photo" src={sol} alt="sol"/>
              <p>
                We want to find a way to run the “secret()” function. We can first try to see if inputting a simple &lt;script&gt; tag will work 
                but it appears the website sanitises script tags, preventing direct execution of JavaScript.
              </p>
              <img class="photo" src={sol1} alt="sol"/>
              <p>
                Fortunately, there are alternative ways to execute JavaScript functions without directly using the &lt;script&gt; tag. One effective method 
                is to use event listeners, which can trigger JavaScript execution under specific conditions.
                <br/><br/>
                <b>Using the onclick Event</b>
                <br/><br/>
                One option is to create a button that, when clicked, will invoke the secret() function. The input would look like this:
              </p>
              <code>{text2}</code>
              <br/><br/>
              <img class="photo" src={sol2} alt="sol"/>
              <p>
                When this button is rendered, clicking it will call the secret() function, successfully triggering the alert.
                <br/><br/>
                <b>Using the onerror Event</b>
                <br/><br/>
                Another approach is to leverage the onerror event handler, which can be applied to elements like images. For example, 
                we can create an image tag with a source that is guaranteed to fail, which would then call the secret() function when the error occurs:
              </p>
              <code>{text3}</code>
              <br/><br/>
              <img class="photo" src={sol3} alt="sol"/>
              <p>
                This method works because when the browser fails to load the image (as 'x' is not a valid image source), the onerror event 
                is triggered, executing the secret() function and displaying the alert.
              </p>
              <img class="photo" src={sol4} alt="sol"/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
