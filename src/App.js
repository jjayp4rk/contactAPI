import React from "react";

import Form from "./components/Form"
// import Profile from "./components/Profile"

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Switch,
//   Redirect
// } from 'react-router-dom'

// const key = "30edPfuB5QNSZgSu65tYSwyBCw1q2MdV";

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {email: ""}
  // }

  // componenetDidMount(){
  //   this.fullcontact();
  // }

  fullcontact = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    fetch('https://api.fullcontact.com/v3/person.enrich', {
      method: 'post',
      headers: {
        "Authorization" : "Bearer 30edPfuB5QNSZgSu65tYSwyBCw1q2MdV"
      },
      body: JSON.stringify({"email": email})
    }).then(function(res) {
      return res.json();
    }).then(function(json) {
      console.log(json);
    })
  }  
  render() {
    return (
      <div>
        <p>Contact Form</p>
        <Form fullcontact={this.fullcontact}/>
      </div>  
    )
  }
  // render() {
  //   return(
  //     <Router>
  //       <div className = "App">
  //         <Route exact path="/" component={Form} />
  //         {/* <Route exact path="/profile" component={Profile} /> */}
  //       </div>
  //     </Router>
  //   );
  // }
};

export default App;


