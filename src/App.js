import logo from './logo.svg';
import profile from './profile.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <img src={profile} className="App-profile" alt="Mohamed Salem" />

        <h1 className="App-title">Mohamed Salem</h1>
        <p className="App-subtitle">student at cairo university| Cloud Solution Architect Trainee</p>
        <p className="App-desc">
          Passionate about Cloud Computing, DevOps, and building scalable solutions.  
          AWS Cloud Solution Architect trainee at NTI, with experience in Linux Administration, Docker, and modern IT systems.
        </p>

        <div className="App-buttons">
          <a className="App-button" href="https://github.com/NASSERMO2004" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="App-button" href="https://www.linkedin.com/in/mohamed-salem245/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
