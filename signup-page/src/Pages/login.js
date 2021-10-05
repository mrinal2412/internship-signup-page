import react, {useState} from "react";
import validator from "validator";
import './login.css'



function Login(){
  const [emailError, setEmailError]= useState(false);
  const [nameError, setNameError]= useState(false);
  const [passError, setPassError]= useState(false);
  
   
 
  function EmailCheck(e){
  var userEmail= e.target.value;
  if (validator.isEmail(userEmail)) {
    setEmailError(false)
  } else {
    setEmailError(true)
  }
  
}
function NameCheck(e){
  var name=e.target.value;
  if(name.length>=6){
    setNameError(false)
  } else{
    setNameError(true)
  }
}
function PassCheck(e){
  var pass=e.target.value;
  if(pass.length>=6){
    setPassError(false)
  } else{
    setPassError(true)
  }
}



 
  return(
 

  

<div >
  <div className='title'>
 <h1>Create  Account</h1>
 <br/>
 </div>
 <form className='loginbox'>
  <div className='name'>
   <label>
      <h3 className='fonts'>Name</h3>
   </label>
   <br/>
   <input 
    className={nameError? 'invalidName': 'validName'}
    type="text"
    placeholder="Name"
    onChange={(e)=>NameCheck(e)}
   />
   <br/>
   <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{nameError? 'Name too short': '' }</span>
        </div>
        <br/>
        <div className='email'>
   <label>
   <h2 className='fonts'> Email Address</h2> 
   </label>
   <input 
    className={emailError? 'invalidMail':'validMail'}
    
    type="email"
    placeholder="Email Address"
    onChange={(e)=>EmailCheck(e)}
    />
    <br/>
     <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError? 'Invalid Mail Format':'' }</span>
        </div>
   <br/>
   <div className='pass'>
   <label>
   
   <h2 className='fonts'> Password</h2>
   </label>
   <input 
    className={passError?'invalidPass': 'validPass'}
    type="password"
    placeholder="Password"
    onChange={(e)=>PassCheck(e)}
    />
    <br/>
    <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{passError? 'Password too short': '' }</span>
        <br/>

       <div className='buttonbox'>
        <button className='submit'>Submit</button>
        </div>
        </div>
 </form>
 <br/>

</div>

); 


}
export default Login;

