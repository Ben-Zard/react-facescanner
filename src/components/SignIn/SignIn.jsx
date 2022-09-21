import {useState} from 'react';

const SignIn = ({handleRoute}) => {
    const [data,setData] = useState({
    id:'',
    password: '',
    name: '',
     email:'',
     entires : 0,
     joined: "",
    })
    
    const {email,password} = data;
    
    const changeHandler = e => {
      setData({...data,[e.target.name]:[e.target.value]});
    }
    
    const submitHandler = e => {
      e.preventDefault();
      fetch('http://localhost:4000/signin',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            email: email[0],
            password:password[0]
        })
      })
      .then(res => res.json())
      .then(data =>{
        if (data === 'good'){
             handleRoute('home')  
        }
      })
    }
      return (
        <div className='formalign'>
            <div className='forminner'>
          <div onSubmit={submitHandler} className = "form">
            <h1>Sing in</h1>
            <label>email</label>
          <input type="text" name="email" value={email} onChange={changeHandler}/><br/>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input onClick = {submitHandler}
          type="submit" name="submit"/>
          
          <p onClick = {()=>handleRoute('register')} className='register'>Register</p>
          </div>
          </div>
        </div>
    
      );
    }

export default SignIn;