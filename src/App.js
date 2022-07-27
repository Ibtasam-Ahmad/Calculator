// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import { useState } from 'react';

function App() {

  const [result,setResult] = useState(' ');

  const clickHandler = ( event ) => {
    setResult(result.concat(event.target.value))
  }

  const clearDisplay = () => {
    setResult(' ');
  }

  const calculate = () => {
    setResult(eval(result));
  }

  return (

    <div className='calc'>

      <input type='text' placeholder='0' id='answer' value={result}/>
      <input type='button' value='9' className='button' onClick={clickHandler}/>
      <input type='button' value='8' className='button' onClick={clickHandler}/>
      <input type='button' value='7' className='button' onClick={clickHandler}/>
      <input type='button' value='6' className='button' onClick={clickHandler}/>
      <input type='button' value='5' className='button' onClick={clickHandler}/>
      <input type='button' value='4' className='button' onClick={clickHandler}/>
      <input type='button' value='3' className='button' onClick={clickHandler}/>
      <input type='button' value='2' className='button' onClick={clickHandler}/>
      <input type='button' value='1' className='button' onClick={clickHandler}/>
      <input type='button' value='0' className='button' onClick={clickHandler}/>
      <input type='button' value='.' className='button' onClick={clickHandler}/>
      <input type='button' value='+' className='button' onClick={clickHandler}/>
      <input type='button' value='-' className='button' onClick={clickHandler}/>
      <input type='button' value='*' className='button' onClick={clickHandler}/>
      <input type='button' value='/' className='button' onClick={clickHandler}/>
      <input type='button' value='%' className='button' onClick={clickHandler}/>
      <input type='button' value='Clear' className='button button1' onClick={clearDisplay}/>
      <input type='button' value='=' className='button button1' onClick={calculate}/>

    </div>

    );
  }
  

//   const [calc, setCalc] = useState("");
//   const [result, setResult ] = useState("");
//   const ops = ['/', '*', '+', '-', '.'];

//   const updateCalc = value => {
//     if (
//       ops.includes(value) && calc === ''  ||
//       ops.includes(value) && ops.includes(calc.slice(-1))
//     )
//     {
//       return;
//     }

//     setCalc(calc + value)

//     if (!ops.includes(value))
//     {
//       setResult(eval(calc + value).toString());
//     }
//   }

//   const createDigits = () => {
//     const digits = [];
//     for (let i =1; i<10; i++)
//     {
//       digits.push(
//         <button onClick={() => updateCalc(i.toString())} key={i}>
//           {i}
//         </button>
//       )
//     }
//     return digits;
// }
//     const calculate = () => {
//       setCalc(eval(calc).toString());
//     }

//     const deleteLast = () => {
//       if (calc == '')
//       {
//         return;
//       }
//       else
//       {
//         const value = calc.slice(0,-1);

//         setCalc(value);
//       }
//     }


//   return (
//     <div className='App'>
//       {/* Calculator */}

//       <div className='calculator'>
//         <div className='display'>
//           {result? <span>
//             ({result})
//           </span> : ''}&nbsp;
//           {calc || "0"}
//         </div>

//         <div className='operators'>
//           <button onClick={() => updateCalc('/')}>/</button>
//           <button onClick={() => updateCalc('*')}>*</button>
//           <button onClick={() => updateCalc('+')}>+</button>
//           <button onClick={() => updateCalc('-')}>-</button>
//           <button onClick={deleteLast}>DEL</button>
//         </div>

//         <div className='digits'>
//           { createDigits() }
//           <button onClick={() => updateCalc('0')}>0</button>
//           <button onClick={() => updateCalc('.')}>.</button>
//           <button onClick={calculate}>=</button>

//         </div>

//       </div>
//     </div>



export default App;
