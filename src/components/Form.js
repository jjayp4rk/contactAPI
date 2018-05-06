import React from "react";

// fullcontact = async (e) => {
//     e.preventDefault();
//     const email = e.target.elements.email.value;
//     fetch('https://api.fullcontact.com/v3/person.enrich', {
//       method: 'post',
//       headers: {
//         "Authorization" : "Bearer 30edPfuB5QNSZgSu65tYSwyBCw1q2MdV"
//       },
//       body: JSON.stringify({"email": email})
//     }).then(function(res) {
//       return res.json();
//     }).then(function(json) {
//       console.log(json);
//     })
//   }  
//   render() {
//     return (
//       <div>
//         <p>Contact Form</p>
//         <Form fullcontact={this.fullcontact}/>
//       </div>  
//     )
//   }



class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.fullcontact}>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Enter email..." 
                />
                <button>Get Profile</button>
            </form>                
        )
    }
}

export default Form;