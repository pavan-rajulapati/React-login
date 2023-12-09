import React, { useState } from 'react'

const Login = () => {

  const [loginData,setLoginData] = useState({
    userName : '',
    password : ''
  })

  let handleEmail = (event) =>{
    setLoginData({...loginData,userName:event.target.value})
  };

  let handlepassword = (event) =>{
    setLoginData({...loginData,password:event.target.value})
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    const { userName, password } = loginData;

    if (userName === '' || password === ''){
      alert('mail and password should not be empty');
    }
    else if(password.length < 6){
      alert('passoword must be greater than 6');
    }
    else{

      console.log('username :'+ userName)
      console.log('password :'+ password)
      
    }
    
  };

  return (
    <div className='mainDiv'>
      <div className='login_signup'>
        <div className='loginForm'>
          <div className='hedding'>
              <h1>Login form</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <input type='email' placeholder='enter your email' onChange={handleEmail}  />
                <input type='password' placeholder='enter your password' onChange={handlepassword} />
            </div>
            <div className='submitBtn'>
                <button>Login</button>
            </div>
          </form>
        </div>
        <div className='info'>
          <h2>Hi, welcome to our website.</h2>
          <button className='registerBtn'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Login
