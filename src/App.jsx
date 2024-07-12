import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Flags from './components/Flags';
import PopUp from './components/PopUp';
import StartForm from './components/StartForm';

function App() {
  const [showScrollPopup, setShowScrollPopup] = useState(false);
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);
  const [showParagraphPopup, setShowParagraphPopup] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [showStartForm, setShowStartForm] = useState(false);
  const [paragraphPopupSize, setParagraphPopupSize] = useState({ width: '300px', height: '200px'});
  const [popupTop, setPopupTop] = useState(90);
  const flagsRef = useRef(null);

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
  const handleScrollToBottom = () => {
    flagsRef.current.scrollIntoView();
  }
  const handlePasswordClick = () => {
    setShowPasswordPopup(true);
  }
  const handleExpandPopup = () => {
    setParagraphPopupSize((prevSize) => ({
      width: `${parseInt(prevSize.width) +10}px`,
      height: `${parseInt(prevSize.height) +10}px`,
    }))
  }
  const handleArrowClick = () => {
    setPopupTop((prevTop) => prevTop + 5);
  }
  const handleDangerPopupClose = () => {
    setShowParagraphPopup(false);
    setParagraphPopupSize({ width: '300px', height: '200px'})
  }
  const handleSecretClick = () => {
    setShowStartForm(true);
  }

  const dangerPopupStyles = {
    content: {
      color: 'white',
      border: '2px solid red',
      background: 'black',
      width: paragraphPopupSize.width,
      height: paragraphPopupSize.height,
      position: 'relative'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    }
  }

  const idiotStyles = {
    content: {
      top: '10px',
      right: '10px',
      bottom: 'auto',
      left: 'auto',
      marginRight: '0',
      width: '100px',
      height: 'auto',
      padding: '10px',
      background: 'black',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      color: 'white',
      fontFamily: 'Times News Romans',
      fontSize: 'x-small',
      zIndex: 1000,
      pointerEvents: 'auto',
    },
    overlay: {
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
  }; 

  const passwordStyles = {
    content: {
      top: `${popupTop}%`,
      right: '10px',
      bottom: 'auto',
      left: 'auto',
      marginRight: '0',
      width: '200px',
      height: 'auto',
      padding: '10px',
      background: 'black',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      color: 'white',
      fontFamily: 'Times New Roman',
      fontSize: 'x-small',
      zIndex: 1000,
      pointerEvents: 'auto',
      animation: 'riseUp 14s ease-out forwards',
    },
    overlay: {
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    },
  }; 

  return (
    <div className='app-container'>
      <h1>Welcome to my awesome new website.</h1>
      <PopUp
        message="you're scrolling the wrong way idoit!"
        isOpen={showScrollPopup}
        onClose={() => setShowScrollPopup(false)}
        showCloseButton={true}
        customStyles={idiotStyles}
      />
      <PopUp
        message="PLEASE SIGN UP TO MY NEWSLETRTER"  
        isOpen={showNewsletterPopup}
        onClose={() => setShowNewsletterPopup(false)}
        showCloseButton={true}/>
      <PopUp
        message="IF YOU DO NOT FOLLLOW THESE INSTRUCTIONS, THE WEBSITE WILL "  
        isOpen={showParagraphPopup}
        customStyles={dangerPopupStyles}
        showCloseButton={false}
        onExpand={handleExpandPopup}
      >
        <img src="/danger2.gif" alt="Danger" />
        <img src="/nuclear1.gif" alt="Nucleear" style={{ position: 'absolute', top: 0, left: 0, width: '50px' }}/>
        <img src="/nuclear1.gif" alt="Nucleear" style={{ position: 'absolute', top: 0, right: 0, width: '50px' }}/>
        <img src="/nuclear1.gif" alt="Nucleear" style={{ position: 'absolute', bottom: 0, left: 0, width: '50px' }} onClick={handleDangerPopupClose}/>
        <img src="/nuclear1.gif" alt="Nucleear" style={{ position: 'absolute', bottom: 0, right: 0, width: '50px' }}/>
      </PopUp>
      <PopUp
        message="lol, you thought"
        isOpen={showPasswordPopup}
        onClose={() => setShowPasswordPopup(false)}
        showCloseButton={true}
        customStyles={passwordStyles}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/bush_laughing.gif" alt="laughing-at-you" />
          <div style={{ marginLeft: '10px' }}>
            <button onClick={handleArrowClick} style={{ position: 'absolute', top: 0, right: 0 }}>V</button>
          </div>
        </div>
      </PopUp>
      <div className='welcome-gifs'>
        <img src="/welcome1.gif" alt="Welcome 1" className='welcome-gif1' />
        <img src="/welcome2.gif" alt="Welcome 2" className='welcome-gif2' />
        <img src="/welcome3.gif" alt="Welcome 3" className='welcome-gif3' />
        <img src="/welcome4.gif" alt="Welcome 4" className='welcome-gif4' onClick={handleScrollToBottom} />
        <img src="welcome10.gif" alt=" " className='welcome-gif' />
        <img src="/welcome5.gif" alt="Welcome 5" className='welcome-gif5' />
        <img src="/welcome6.gif" alt="Welcome 6" className='welcome-gif6' />
      </div>
      <div className='important-paragraph' onClick={handleParagraphClick}>
        <p>This is an important paragraph that should be read carefully. The nuclear codes will be included at the end of the paragraph, SO MAKE SURE YOU READ IT!! The nuclear codes: 234, 94, 12033.</p>
      </div>
      <StartForm onSecretClick={handleSecretClick} />
      <div>
        <img src="/news.gif" alt="Welcome 4" className='welcome-gif4' onClick={handleNewsletterClick} />
        <img src="/password.gif" alt="Welcome 4" className='welcome-gif4' onClick={handlePasswordClick} />
      </div>
      <Flags ref={flagsRef}/>
    </div>
  )
}

export default App
