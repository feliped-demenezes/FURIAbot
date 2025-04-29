
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="chat-card">
        <img src="public/logo-furia.svg" alt="FURIA Logo" className="furia-logo" />
        <Chat />
      </div>
    </div>
  );
}

export default App;
