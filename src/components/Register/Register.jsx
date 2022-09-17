import {useState} from 'react';

const Register = ({handleRoute}) => {
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
            <h1>Register</h1>
            <label>Name</label>
          <input type="text" name="Name" value={username} onChange={changeHandler}/><br/>
            <label>Username</label>
          <input type="text" name="username" value={username} onChange={changeHandler}/><br/>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input onClick = {()=>handleRoute('home')}
          type="submit" name="submit"/>
          </div>
          </div>
        </div>
    
      );
    }

export default Register;