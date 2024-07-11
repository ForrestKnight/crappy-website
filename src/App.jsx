import React, { useEffect, useState } from 'react';
import './App.css';
import PopUp from './components/PopUp';

function App() {
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showParagraphPopup, setShowParagraphPopup] = useState(false);


  useEffect(() => {
    const timer =setTimeout(() => {
      setShowScrollPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleParagraphClick = () => {
    setShowParagraphPopup(true);
  };

  const handleNewsletterClick = () => {
    setShowNewsletterPopup(true);
  };

  return (
    <div className='app-container'>
      <h1>Welcome to my awesome new website.</h1>
      <PopUp message="you're scrolling the wrong way idoit!" isOpen={showScrollPopup} onClose={() => setShowScrollPopup(false)}/>
      <PopUp message="PLEASE SIGN UP TO MY NEWSLETRTER"  isOpen={showNewsletterPopup} onClose={() => setShowNewsletterPopup(false)}/>
      <PopUp message="IF YOU DO NOT FOLLLOW THESE INSTRUCTIONS, THE WEBSITE WILL SELF DESTRUCT."  isOpen={showParagraphPopup} onClose={() => setShowParagraphPopup(false)}/>
      <div className='welcome-gifs'>
        <img src="/welcome1.gif" alt="Welcome 1" className='welcome-gif1' />
        <img src="/welcome2.gif" alt="Welcome 2" className='welcome-gif2' />
        <img src="/welcome3.gif" alt="Welcome 3" className='welcome-gif3' />
        <img src="/welcome4.gif" alt="Welcome 4" className='welcome-gif4' onClick={handleNewsletterClick} />
        <img src="welcome10.gif" alt=" " className='welcome-gif' />
        <img src="/welcome5.gif" alt="Welcome 5" className='welcome-gif5' />
        <img src="/welcome6.gif" alt="Welcome 6" className='welcome-gif6' />
      </div>
      <div className='important-paragraph' onClick={handleParagraphClick}>
        <p>This is an important paragraph that should be read carefully. The nuclear codes will be included at the end of the paragraph, SO MAKE SURE YOU READ IT!! The nuclear codes: 234, 94, 12033.</p>
      </div>
    </div>
  )
}

export default App
