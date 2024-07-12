import { useState } from 'react';
import './App.css';
import { Buttons } from './components/Buttons';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import googlelogo from './image/googlelogo_light.png'
import { SearchResults } from './components/SearchResults';

function App() {
  const [results, setResults] = useState([])

  return (
    <div className="App">
      <Header />
        <div className='logo-container'>
          <img src={googlelogo} alt="Google Logo" className='google-logo'/>
        </div>
      <div className='centered-main'>
        <SearchBar setResults={setResults}/>
        <SearchResults results={results}/>
        <Buttons />
        <div className='languages-offered'>
            Google offered in:
            <a href="https://translate.google.com/">Francais</a>
            <a href="https://translate.google.com/">Kiswahili</a>
            <a href="https://translate.google.com/">Ikinyarwanda</a>
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
