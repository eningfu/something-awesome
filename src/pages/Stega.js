// import { useState } from 'react';
import Header from './components/Header';
// import Nav from './components/Nav';

export default function Stega() {
  return (
    <>
      <div>
        <Header text="What is Steganography?"/>
        {/* <Nav/> */}
        <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            Steganography is the practice of hiding secret information within a medium, such as an image, video, or audio file. 
            In the context of images, steganography embeds a message or data within the image file without noticeably altering its 
            appearance, making it an effective method for covert communication.
            <br/>
            <br/>
            <b>Image steganography</b> typically hides data within the pixels of an image file. For instance, a message might be embedded 
            by altering the least significant bits of an image’s color values. This technique is known as Least Significant Bit (LSB) manipulation.
            <br/>
            <br/>
            <b>Audio steganography</b> works by embedding information within audio files, often by slightly modifying audio samples at a level that is 
            imperceptible to the human ear, such as encoding text within an MP3 file’s low-frequency sound spectrum. 
            <br/>
            <br/>
            <b>Text steganography</b> hides information within text, using techniques like inserting hidden Unicode characters or subtly altering spacing 
            and punctuation; an example could involve placing a message within specific letters of a document using whitespace manipulation. 
          </p>
        </div>
        <button style={{ marginBottom: '30px' }}><a href="/language">ready? &gt;</a></button>
      </div>
    </>
  );
}
