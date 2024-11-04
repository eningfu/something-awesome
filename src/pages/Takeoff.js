import { useState } from 'react';
import Header from './components/Header';
import img from './images/takeoff.jpg';
import imgsol from './images/takeoffexp.png';
// import exp from './images/propetyexp.png';
// import imgexp from './images/imageexp.png';
import prop from './images/property.png';
// import Nav from './components/Nav';

export default function Takeoff() {
  const [answer, setAnswer] = useState(''); 
  const [submitted, setSubmitted] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [solution, setSolution] = useState(false);
  const [hint, setHint] = useState(false);

  const handleConfirm = () => {
    if (answer === "19:57") {
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
        <Header text="[2/2] Take Off"/>
        <div style={{ backgroundColor: "white", height: "10px", width: "33%" }}></div>
        {/* <Nav/> */}
        {/* <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            OSINT, or open-source intelligence, is the gathering of information from public 
            available sources such as websites, social media, and publications.
            <br/>
            <br/>
            When analyzing a photo, OSINT techniques can reveal hidden information. Metadata 
            embedded in the image file, such as geolocation, timestamps, and camera settings, 
            can provide clues about where and when the photo was taken. Visual cues within the 
            image—such as landmarks, weather conditions, or street signs—can also help identify 
            the location. Reverse image searches can trace where the photo has been used or 
            shared online, offering insights into its origin or the context in which it was 
            taken. By combining these elements, investigators can uncover significant details 
            from a seemingly simple image.
          </p>
          <img class="photo" src={imgexp} alt="property" style={{ marginRight: '20px' }}/>
          <img class="photo" src={exp} alt="property"/>
        </div> */}

        <div class="challenge">
          <p class="silkscreen-regular">
            -_- &gt; Got some intel that the suspect has boarded this flight. However, whoever 
            took the photo did not pay attention to the boarding screens and missed some crucial 
            information.
          </p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; When will this plane land at its destination?</p>
            <p class="example">Format: if you think the answer is 4:16PM, type in 16:16</p>
          </div>

          <img class="photo" src={img} alt="findme"/>

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
              <p id="response">O_o &gt; Nice work! We shall pass this information on. It seems that they've made their way to Sydney as well.</p>
              <button><a href="/cryptography">next &gt;</a></button>
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
              <p class="hint">Each plane has something unique to it. Can you find what I mean?</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>Zooming in on the aircraft’s body near the tail, we see the code “9M-MTF”. This is the aircraft’s unique registration code. 
                We can search this in Google to find the plane’s flight records. However, we first need to find out when this photo was taken 
                to know which flight record to look at. 
              <br/><br/>
                Each photo has its own metadata or EXIF data. By downloading the image and viewing its properties, we see that the photo was 
                taken on August 26th, 2024, at 11:30am. 
              </p>
              <img class="photo" src={prop} alt="propeties"/>
              <p>
                Now we can search for the flight registration code along with the date. The time is something we can temporarily disregard as the 
                aircraft still looks like it’s loading cargo. We find a flight on the 26th of August 2024 departing Sydney with Kuala Lumpur as its 
                destination. Its recorded departure time was past 1pm, which fits the time of events. The aircraft landed at its destination at 7:57pm.
              </p>
              <img class="photo" src={imgsol} alt="findmeexp"/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
