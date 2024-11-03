import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Ending() {
  const [submitted, setSubmitted] = useState(false);
  const [submitted1, setSubmitted1] = useState(false);
  const [submitted2, setSubmitted2] = useState(false);
  const [submitted3, setSubmitted3] = useState(false);

  const handleConfirm = () => {
    setSubmitted(true);
  };

  const handleConfirm1 = () => {
    setSubmitted1(true);
  };

  const handleConfirm2 = () => {
    setSubmitted2(true);
  };

  const handleConfirm3 = () => {
    setSubmitted3(true);
  };

  return (
    <>
      <Header text="..."/>
      {/* <Nav/> */}
      <div class="challenge">
        {!submitted && (
          <>
            <p className="silkscreen-regular">-_- &gt; *Knock Knock* Open up!</p>
            <button className="checker" id="confirm" onClick={handleConfirm} style={{ marginLeft: "0px" }}>
              Break down door &gt;
            </button>
          </>
        )}
      
        {submitted && !submitted1 && (
          <div className="silkscreen-regular" id="char">
            <p><i>the door creaks open</i></p>
            <p className="silkscreen-regular">o_o &gt; It is so dark in here.</p>
            <button className="checker" id="confirm" onClick={handleConfirm1} style={{ marginLeft: "0px" }}>
              Walk towards the only light source &gt;
            </button>
          </div>
        )}

        {submitted1 && !submitted2 && (
          <div className="silkscreen-regular" id="char">
            <p><i>you hear multiple voices</i></p>
            <p className="silkscreen-regular">o_o &gt; I don't think our suspect is alone in there.</p>
            <button className="checker" id="confirm" onClick={handleConfirm2} style={{ marginLeft: "0px" }}>
              Approach with caution &gt;
            </button>
          </div>
        )}

        {submitted2 && !submitted3 && (
          <div className="silkscreen-regular" id="char">
            <p>^O^ ^O^ ^O^ ^O^ &gt; 🎁🎈✨🎉 HAPPY BIRTHDAY 🎉✨🎈🎁</p>
            <p className="silkscreen-regular">^_^ &gt; Sorry to disappoint but the case wasn't real. You were so caught up with it that you didn't realise it is your birthday today!</p>
            <button className="checker" id="confirm" onClick={handleConfirm3} style={{ marginLeft: "0px" }}>
              That case took two days? &gt;
            </button>
          </div>
        )}

        {submitted3 && (
          <div className="silkscreen-regular" id="char">
            <p className="silkscreen-regular">;o_o &gt; Um, well we did have to travel a bit didn't we. Surely that was fun.</p>
            <p className="silkscreen-regular">O_O &gt; Anyway, here's that cake I promised earlier.</p>
            <h1>🎂</h1>
            <p className="silkscreen-regular">^_^ &gt; Hope you are ready for the real deal soon.</p>
          </div>
        )}
      </div>
    </>
  );
}