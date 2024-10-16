import './App.css';
import Header from './Component/Header';
import Section from './Component/Section';
import { useState } from 'react';

function App() {
  const [ input, setInput ] = useState('')
  const [loading, setLoading] = useState(false)
    return (
    <div className="App">
    <Header input={input} setInput={setInput} />
    <Section input={input}  setLoading={setLoading} />

    </div>
  );
}

export default App;
