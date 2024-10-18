import './App.css';
import Header from './Component/Header';
import Section from './Component/Section';
import { useState } from 'react';

function App() {
  const [ input, setInput ] = useState('')
  const [loading, setLoading] = useState(false)

      // MoviesLength
      const [length, setLength] = useState(0)

  //  FUNCTION TO  SET FOUND MOVIES LENGTH
        const moviesLengthHandler = (MoviesLength) => {
            setLength(MoviesLength)
        }
        

    return (
    <div className="App">
    <Header input={input} setInput={setInput} length={length} />
    <Section input={input}  setLoading={setLoading} giveMeLength={moviesLengthHandler} />

    </div>
  );
}

export default App;
