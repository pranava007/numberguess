import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Reasult from './Reasult';

const secretnum = Math.floor(Math.random() * 10) + 1

function App() {

const [term,setTerm] = useState("")

const handlechage = (e)=>{
  setTerm(e.target.value)
}



  return (
    <div className="container">
      <div className='head'>
      <label htmlFor='term' > Guess the number between 1 to 10</label>
      </div>
      <input id='term '  type='text' nume='term' onChange={handlechage} />

     <Reasult secretnum={secretnum} term={term} />
    
    </div>
  );
}

export default App;
