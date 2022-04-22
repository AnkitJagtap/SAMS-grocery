import React, { useState } from 'react'
import './Login.css'
import { Link} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault();
    }
    const register = e => {
        e.preventDefault();
    }
  
    return (
        <div className='login'>
        <Link to = '/'>
            <img className='login__logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
            />
        </Link>

        <div className='login__container'>
            <h1>
                Sign in
            </h1>

            <form>
                <h5>
                    E-mail
                </h5>
                <input value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Enter email' type='text'/>

                <h5>
                    Password
                </h5>
                <input value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='Enter password' type='password'/>

                <button type='submit'
                onClick={signIn}
                className='login__signInButton'>
                    Sign in
                </button>
            </form>

            <p>
                By signing-in you agree to this clones Conditions of Use.
                Please adhere to community guidlines.
            </p>
            <button type='submit'
            onClick={register}
            className='login__registerButton'>
                Create your amazon account
            </button>
        </div>
        
    </div>
  )
}

export default Login