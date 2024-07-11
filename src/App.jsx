import './App.css'

function App() {

  return (
    <div className='app-container'>
      <h1>Welcome to my awesome new website.</h1>
      <div className='welcome-gifs'>
        <img src="src/assets/welcome1.gif" alt="Welcome 1" className='welcome-gif1' />
        <img src="src/assets/welcome2.gif" alt="Welcome 2" className='welcome-gif2' />
        <img src="src/assets/welcome3.gif" alt="Welcome 3" className='welcome-gif3' />
        <img src="src/assets/welcome4.gif" alt="Welcome 4" className='welcome-gif4' />
        <img src="welcome0.gif" alt=" " className='welcome-gif' />
        <img src="src/assets/welcome5.gif" alt="Welcome 5" className='welcome-gif5' />
        <img src="src/assets/welcome6.gif" alt="Welcome 6" className='welcome-gif6' />
      </div>
      <div className='important-paragraph'>
        <p>This is an important paragraph that should be read carefully. The nuclear codes will be included at the end of the paragraph, SO MAKE SURE YOU READ IT!! The nuclear codes: 234, 94, 12033.</p>
      </div>
    </div>
  )
}

export default App
