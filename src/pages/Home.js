
import moh from '../moh.png'
import '../App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
       
        <img src={moh} alt="MOH" style={{ width: '220px', height: '220px' }} />
        <p>
        Household Registry.
        </p>
        
      </header>
    </div>
  );
}

export default Home;
