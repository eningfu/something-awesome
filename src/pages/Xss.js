// import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Xss() {
  return (
    <>
      <div>
        <Header text="What is Cross-Site Scripting (XSS)?"/>
        {/* <Nav/> */}
        <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            Cross-Site Scripting (XSS) is a security vulnerability found in web applications where an attacker injects malicious 
            scripts into content viewed by other users. This type of attack often targets websites that display user-generated 
            content, as it allows attackers to run their code in the browser of anyone who views the compromised page. These 
            scripts are typically written in JavaScript and can perform actions like stealing session cookies, capturing 
            keystrokes, or redirecting users to malicious websites.
            <br/>
            <br/>
            XSS vulnerabilities generally come in three forms: 
            <ul>
              <li>
                <b>Stored XSS:</b> The malicious script is permanently stored on the target server, for instance, in a database, 
                and is served to other users when they view the infected content
              </li>
              <li>
                <b>Reflected XSS:</b> The injected script is part of a URL or form submission and is reflected off the server to the user's browser.
              </li>
              <li>
                <b>DOM-based XSS:</b> Takes advantage of vulnerabilities in the Document Object Model, where scripts manipulate the page 
                dynamically on the client side without needing server involvement. 
              </li>
            </ul>
          </p>
        </div>
        <button style={{ marginBottom: '30px' }}><a href="/letmein">ready? &gt;</a></button>
      </div>
    </>
  );
}
