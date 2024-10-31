import { useState } from 'react';
import Header from './components/Header';
import img from './images/wallpaper.png';
import imgsol from './images/wallpapersol.png';
// import Nav from './components/Nav';

export default function Stega() {
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
        <Header text="Hidden"/>
        {/* <Nav/> */}
        <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            Steganography is the practice of hiding secret information within a medium, such as an image, video, or audio file. 
            In the context of images, steganography embeds a message or data within the image file without noticeably altering its 
            appearance, making it an effective method for covert communication.
            <br/>
            <br/>
            The most common technique used in image steganography is Least Significant Bit (LSB) manipulation. This method hides 
            information by modifying the least significant bits of the pixel values in the image. Since the LSB represents the smallest 
            change in color or intensity, altering these bits has minimal visible impact on the image's appearance.
            <br/>
            <br/>
            For example:
            <br/>
            In a 24-bit color image (which uses 8 bits for red, green, and blue channels), the least significant bit of each channel can be 
            changed to encode a binary message. This slight modification doesn't noticeably change the color of the pixels, so the image 
            looks unchanged to the human eye. For instance, in a pixel with RGB values of (110, 200, 95), changing the last bit of each value 
            might result in (111, 201, 94).
          </p>
        </div>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; Found a computer. This wallpaper seems a bit interesting...</p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What is the password?</p>
          </div>

          <img class="photo" src={img} alt="findme" style={{ width: '50%' }}/>

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
              <p class="hint">blah</p>
            </div>
          )}

          {solution && (
            <div class="silkscreen-regular" id="solutionexp">
              <p>bra</p>
              <img class="photo" src={imgsol} alt="wallpapersol" style={{ width: '100%' }}/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
