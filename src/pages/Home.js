
import moh from '../images/moh.png'
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
       
        <img src={moh} alt="MOH" style={{ width: '220px', height: '220px' }} />
        <p>
        Ministry of Health.
        </p>
        
      </header>
    </div>
  );
}

export default Home;
