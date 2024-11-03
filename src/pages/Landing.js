import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Landing() {
  const [name, setName] = useState(''); 
  const [birthday, setBirthday] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');

  const handleConfirm = () => {
    const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

    if (birthday === '' && name === '') {
      setError('Please enter a name.')
    } else if (!datePattern.test(birthday)) {
      setError('Please enter a valid birthday in the format DD/MM/YYYY.');
      return;
    } else {
      setError('');
    }
    
    if (name && birthday) {
      const [d, m] = birthday.split('/');
      setDay(d);
      setMonth(m);
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
          <p>O_O &gt; Can I just get some identification?</p>
        </div>

        <div style={{ margin: "auto" }}>
          <input 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter name"
          />
          <br/><br/>
          <input 
            id="birthday" 
            value={birthday} 
            onChange={(e) => setBirthday(e.target.value)} 
            placeholder="Enter birthday"
          />
          <br/><br/>
          {error && <p className="silkscreen-regular" style={{ color: "red", marginTop: "0px" }}>{error}</p>}
          <button class="checker" id="confirm" onClick={handleConfirm} style={{ marginLeft: "0px" }}>confirm &gt;</button>
        </div>

        {submitted && (
          <div className="silkscreen-regular" id="char">
            <p id="username">o_o &gt; Wow, {day}/{month} is coming really up soon, eh? It's the {day - 2}/{month} today.</p>
            <p id="username">^_^ &gt; Well okay, {name}.</p>
            <p id="flavour">^_^ &gt; Caught me at a bad time as we are in the middle of an operation. You don't mind helping out, right? You'll get cake at the end. Don't worry if you don't know anything yet, I will be teaching you the basics.</p>
            <p id="start">O_O &gt; I will see you there.</p>
            <button><a href="/osint">next &gt;</a></button>
          </div>
        )}
      </div>
    </>
  );
}
