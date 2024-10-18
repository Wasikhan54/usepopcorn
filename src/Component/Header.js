import React from 'react';
import '../App.css';

function Header({input, setInput,length}) {
    const inputHandler = (e) => {
      setInput(e.target.value)
      console.log(input)
    }
  return (
    <>
      <div className='headerMain'>
        <div className='logo'>
          <img src="/images/logo.png " alt="Logo" />
          <h1>UsePopcorn </h1>
        </div>
        <div className='search'>
          <input value={input} onChange={inputHandler} type="text" placeholder='Search Movies' />
        </div>
        <p style={{ color: 'white',  fontSize: '14px'}}>Found {length} top results</p>
      </div>
    </>
  );
}

export default Header;
