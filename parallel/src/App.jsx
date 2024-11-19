// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import SignUpForm from './SignUpForm'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Login from './login'

// function App() {
//   const [count, setCount] = useState(0)
 
//   return (
//     <>
//     <BrowserRouter> 
//       <Routes> 
//         <Route path='/signup' element={<SignUpForm />} />
//         <Route path='/login' element={<Login />} /> 
      
//       </Routes>
//     </BrowserRouter> 
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css';
import SignUpForm from './SignUpForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route path='/' element={<SignUpForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/login' element={<Login />} /> 
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
