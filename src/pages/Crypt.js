// import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Crypt() {
  return (
    <>
      <div>
        <Header text="What is Cryptography?"/>
        {/* <Nav/> */}
        <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            Cryptography is the practice of securing information by transforming it into an 
            unreadable format, ensuring that only authorised parties can access it. 
            <br/>
            <br/>
            The Caesar cipher, one of the earliest and simplest encryption methods, works by 
            shifting the letters of the alphabet by a fixed number of positions. For example, 
            with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', and so on. The same shift is 
            applied to each letter in the plaintext to create the ciphertext. To decrypt the 
            message, the receiver simply shifts the letters back by the same amount. Despite 
            its simplicity, the Caesar cipher laid the foundation for more complex encryption 
            techniques used today.
            <br/>
            <br/>
            Beyond the Caesar cipher, other classical ciphers include the Vigenère cipher, which 
            uses a repeating key to shift each letter by a different amount based on the key’s 
            letters. The Vigenère cipher was an improvement on Caesar, as it introduced variability 
            that made it harder to break. Another is the Substitution cipher, which replaces each 
            letter in the plaintext with a different letter in the alphabet, often randomised, 
            creating a one-to-one relationship between plaintext and ciphertext.
            <br/>
            <br/>
            As for modern cryptography… RSA (Rivest-Shamir-Adleman) is one of the most widely used 
            encryption algorithms, notable for its use of asymmetric cryptography - a system where 
            a pair of keys, one public and one private, are used. The public key encrypts data, while 
            only the corresponding private key can decrypt it. This setup allows RSA to securely 
            transmit data over untrusted channels, such as the internet, and forms the foundation of 
            secure communication for much of modern digital infrastructure.
          </p>
        </div>
        <button style={{ marginBottom: '30px' }}><a href="/scrambled">ready? &gt;</a></button>
      </div>
    </>
  );
}
