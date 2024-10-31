import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Landing() {
  const [name, setName] = useState(''); 
  const [submitted, setSubmitted] = useState(false);

  const handleConfirm = () => {
    if (name) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Header text="Welcome?"/>
      {/* <Nav/> */}
      <div class="challenge">
        <p className="silkscreen-regular">≖_≖ &gt; New visitor? How did you get here? Wait, you must be the new agent in training!</p>

        <div className="silkscreen-regular" id="char">
          <p>O_O &gt; What's your name?</p>
        </div>

        <input 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter name"
        />

        <button class="checker" id="confirm" onClick={handleConfirm}>confirm &gt;</button>

        {submitted && (
          <div className="silkscreen-regular" id="char">
            <p id="username">^_^ &gt; Okay, {name}.</p>
            <p id="flavour">^_^ &gt; Caught me at a bad time as we are in the middle of an operation. You don't mind helping out, right? Don't worry if you don't know anything yet, I will be teaching you the basics.</p>
            <p id="start">O_O &gt; I will see you there.</p>
            <button><a href="/osint">next &gt;</a></button>
          </div>
        )}
      </div>
    </>
  );
}
