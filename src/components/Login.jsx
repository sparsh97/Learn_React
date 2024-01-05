import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {setUser} = useContext(UserContext);
    const onSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
        setUsername('');
        setPassword('');
    }
  return (
    <div className='flex flex-wrap flex-col justify-around align-middle place-content-center text-center bg-slate-500 rounded-lg h-full w-full p-2 m-2'>
        <input className='p-2 rounded-md' type="text" name={username} onChange={e => setUsername(e.target.value)} placeholder='username' />
        <br/>
        <input className='p-2 rounded-md' type="text" name={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
        <br />
        <button className='p-2 text-center bg-indigo-600' onClick={onSubmit}>Login</button>
    </div>
  )
}

export default Login