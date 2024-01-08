// import ICard from "./Icards";
// import Total from "./total"
// import Welcome, {Greeting} from "./welcome";
// import Maths from "./math"

// //Function React Component
// function App(){
//    //x is a JSX Object
//    let x = <p>Hello</p>
//    console.log("type of x", typeof(x))

//   let arr = [12,13,10,20]
//   let obj = {name:"Sakshi" , dob:"14-11-2000", phone:"7845756"}

// return(
//   <>
//   <p>Hello</p>
//   <Welcome></Welcome>
//   <Greeting></Greeting>
//   <ICard obj={obj}></ICard>
//   <Total nums = {arr}></Total>
//   <Maths num1 = {30} num2={1.4} op = {"*"}></Maths>
//   <Maths num1 = {30} num2={100} op = {"*"}></Maths>
//   <Maths num1 = {1.9} num2={1.4} op = {"-"}></Maths>
//   <Maths num1 = {300} num2={1.4} op = {"*"}></Maths>

//   </>
// );
// }

// export default App;
import React, { useState } from 'react';

function SignUpForm() {
  let [username, setUsername] = useState(" ");
  let [email, setEmail] = useState(" ")
  let [password, setPassword] = useState(" ");
  var namechange="";
  var emailchnage="";
  var passwordchange="";
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter Username" onBlur={(event) => namechange=(event.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email"  onBlur={(event) => emailchnage=event.target.value} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"  onBlur={(e) => passwordchange=e.target.value} />
      </form>
      <button type="submit" onClick={()=>{
          setUsername(namechange);
           setEmail(emailchnage);
        setPassword(passwordchange)
}}>Submit</button>
      <p>{username}</p>
      <p>{email}</p>
      <p>{password}</p>
    </div>
  );
}

export default SignUpForm;