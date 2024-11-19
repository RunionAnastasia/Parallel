import React, { useState } from 'react';
import './styles/SignUp.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully');
      // Handle successful sign up (e.g., redirect to login or home page)
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div>
      <form className='signup-form' onSubmit={handleSubmit}>
        <h2> Login</h2>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          required
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          required
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button> <br/>
        <p>Don't have account? <Link to='/signup'>Register</Link></p>
      </form>
    </div>
  );
};

export default Login;