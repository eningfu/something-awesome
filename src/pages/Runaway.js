import { useState } from 'react';
import Header from './components/Header';
import vid from './images/runaway.mp4';
// import exp from './images/propetyexp.png';
// import imgexp from './images/imageexp.png';
import sol from './images/runawaysol.png';
import sol1 from './images/runawaysol1.png';
import sol2 from './images/runaway3.png';
import sol3 from './images/runaway4.png';
import sol4 from './images/runaway5.png';
// import Nav from './components/Nav';

export default function Runaway() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);
  const [hint, setHint] = useState(false);

  const handleConfirm = () => {
    if (answer === "citylinks") {
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
        <Header text="[1/2] Runaway"/>
        <div style={{ backgroundColor: "white", height: "10px", width: "16%" }}></div>
        {/* <Nav/> */}

        <div class="challenge">
          <p class="silkscreen-regular">
            -_- &gt; This suspect has been to a couple places where they have left hidden letters for an ally and we want to find them before they do. They posted this video that shows the area 
            where they dropped their first letter.
          </p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What road are they on and which direction are they going in?</p>
            <p class="example">Format: if you think the answer is Main St westward, type in mainw in lowercase</p>
          </div>

          <video width="270" height="440" controls>
            <source src={vid} type="video/mp4"/>
          </video>

          <div class="answerbox">
            <input 
              id="OSINTanswer"
              value={answer} 
              onChange={(e) => setAnswer(e.target.value)} 
              placeholder="Enter answer"
            />
            <button class="checker" id="OSINTcheck" onClick={handleConfirm}>confirm &gt;</button>
          </div>

          {submitted && (
            <div class="silkscreen-regular" id="char">
              <p id="response">^_^ &gt; Nice work! We shall pass this information on.</p>
              <button><a href="/takeoff">next &gt;</a></button>
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
              <p class="hint">Can you see any text that may clue the approximate area?</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>Unless we can recognise the skyline immediately, we don’t have much to work with. However, at some point in the video, we see 
                advertisements on an LED screen. One of the ads says “O’Brien Icehouse” and if we search this up, it says that they are located 
                in Docklands. Of course, we are not 100% sure that this is the correct area but it’s worth giving it a shot.
              </p>
              <img class="photo" src={sol} alt="property" style={{ marginRight: '20px', width: '200px' }}/>
              <img class="photo" src={sol1} alt="property" style={{ width: '200px' }}/>
              <p>
                If we were to compare the Docklands skyline with the one in the video, we see a couple of buildings that match, in particular this one. 
              </p>
              <img class="photo" src={sol2} alt="property" style={{ marginRight: '20px', width: '100px' }}/>
              <img class="photo" src={sol3} alt="property" style={{ width: '100px' }}/>
              <p>
                Going onto Google Maps, we can pinpoint our approximate location based on where we are positioned based on the perspective of the skyline. 
                We are on Citylink going southward.
              </p>
              <img class="photo" src={sol4} alt="property"/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
