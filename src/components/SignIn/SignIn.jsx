import {useState} from 'react';

const SignIn = ({handleRoute}) => {
    const [data,setData] = useState({
      username:"",
      password:""
    })
    
    const {username,password} = data;
    
    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]});
    }
    
    const submitHandler = e => {
      e.preventDefault();
      console.log(data);
    }
      return (
        <div className='formalign'>
            <div className='forminner'>
          <div onSubmit={submitHandler} className = "form">
            <h1>Sing in</h1>
            <label>Username</label>
          <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input onClick = {()=>handleRoute('home')}
          type="submit" name="submit"/>
          <p onClick = {()=>handleRoute('register')} className='register'>Register</p>
          </div>
          </div>
        </div>
    
      );
    }

export default SignIn;