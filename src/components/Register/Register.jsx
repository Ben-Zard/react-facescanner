import {useState} from 'react';

const Register = ({handleRoute}) => {
  const [data,setData] = useState({
     id:'',
     name: '',
    email:'',
     entires : 0,
     joined: "",
  })
  
  const {email,password,name} = data;
  
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  
  const submitHandler = e => {
    e.preventDefault();
    fetch('http://localhost:4000/register',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
          email: email[0],
          password:password[0],
          name:name[0]
      })
    })
    .then(res => res.json())
     .then(user =>{
    //    if (user){
    //     console.log(user)
    //        setUser(user)
          handleRoute('home')  
    //   }
     })
  }
      return (
        <div className='formalign'>
            <div className='forminner'>
          <div onSubmit={submitHandler} className = "form">
            <h1>Register</h1>
            <label>Name</label>
          <input type="text" name="name" value={name} onChange={changeHandler}/><br/>
            <label>Email</label>
          <input type="text" name="email" value={email} onChange={changeHandler}/><br/>
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input onClick = {submitHandler}
          type="submit" name="submit"/>
          
          </div>
          </div>
        </div>
    
      );
    }

export default Register;