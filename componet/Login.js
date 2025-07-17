"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
    const router=useRouter();
  return (
    <div className='login_area'>
        <div className="login_box">
            <h2>Login</h2>
            <form className='login_form' action="">
                <input type="text" placeholder='👨‍💻 Username' />
                <input type="password" placeholder='🔐 Password' />
                <button>Login</button>
            </form>
            <p>Create an new Account <span className='redic'>Sign up</span> </p>
        </div>

    </div>
  )
}

export default Login;