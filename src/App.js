// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           JSk
//         </a>
//       </header> */}
//     </div>

//   );
// }

// export default App;

import React, { Component } from 'react'
import './App.css';
import Register from "./Components/Register";
import Greet from "./Components/Greet";

class App extends Component {

constructor(props) {
  super(props);

  this.state = {
    isRegistered : false,
    name : null,
    email : null,
    password : null,
    showPass : false,
  };
}
registerHandler = (event) => {
  const name = event.target.name.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  this.setState({name,email,password, isRegistered : true});
  event.preventDefault();
};

showPasswordHandler = () => {
  console.log(this.state);
  this.setState ( {showPass : !this.state.showPass});
  console.log(this.state);
};
  render() {
    return (
      <div>
        {
          this.state.isRegistered ? 
          (<Greet name = {this.state.name} email = {this.state.email}></Greet>) :
          ( <Register submit = {this.registerHandler} 
            showPass = {this.state.showPass} click = {this.showPasswordHandler}></Register>)
            
        }
      </div>
    );
  }
}

export default App;
