// import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function SQLi() {
  return (
    <>
      <div>
        <Header text="Let me in"/>
        {/* <Nav/> */}
        <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            SQL/XSS? 
            <br/>
            <br/>
            hi
          </p>
        </div>

        <div class="challenge">
          <p class="silkscreen-regular">?_? &gt; Users</p>

          <div class="silkscreen-regular" id="char">
            <p>O_O &gt; What does the letter say?</p>
          </div>

          <div>
            <input 
              id="sqlanswer"
              placeholder="Enter answer"
            />
            <button class="checker" id="sqlcheck">confirm &gt;</button>
          </div>
        </div>
      </div>
    </>
  );
}
