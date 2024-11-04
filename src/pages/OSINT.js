// import { useState } from 'react';
import Header from './components/Header';
import exp from './images/propetyexp.png';
import imgexp from './images/imageexp.png';
// import Nav from './components/Nav';

export default function Takeoff() {
  return (
    <>
      <div>
        <Header text="What is Open-Source Intelligence (OSINT)?"/>
        {/* <Nav/> */}
        <div class="explainer">
          <p class="silkscreen-regular" style={{ textAlign: 'left' }}>
            OSINT, or open-source intelligence, is the gathering of information from publicly 
            available sources such as websites, social media, and publications. This intelligence 
            can encompass a wide range of data, including IP addresses, which can be analyzed to 
            identify ownership, geographical location, and associated network details.
            <br/>
            <br/>
            When analyzing a photo, OSINT techniques can reveal hidden information. Metadata 
            embedded in the image file, such as geolocation, timestamps, and camera settings, 
            can provide clues about where and when the photo was taken. Visual cues within the 
            image—such as landmarks, weather conditions, or street signs—can also help identify 
            the location. Reverse image searches can trace where the photo has been used or 
            shared online, offering insights into its origin or the context in which it was 
            taken.
          </p>
          <img class="photo" src={imgexp} alt="property" style={{ marginRight: '20px' }}/>
          <img class="photo" src={exp} alt="property"/>
        </div>

        <button style={{ marginBottom: '30px' }}><a href="/runaway">ready? &gt;</a></button>
      </div>
    </>
  );
}
