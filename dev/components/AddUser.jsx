import React, {Component} from 'react';
const API = `http://localhost:3000/api/user/add`;
const API_OPTIONS = {
  method: 'POST',
  headers : new Headers(),
  body: null
};

class AddUser extends Component {
  constructor(props){
    super(props);
    this.state = {
      formName: 'Enter a Name',
      formEmail: 'Enter an Email',
      formPhone: 'Enter an Phone Number'
    }
    this.sendNewUserToAPI = this.sendNewUserToAPI.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
    
  }

  async sendNewUserToAPI(formName, formEmail, formPhone){
    let payload = {name: formName, email: formEmail, phone: formPhone};

    //must specify headers and stingify body
    let API_OPTIONS = {
      method: 'POST',
      headers : new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(payload)
    };

    let API_RESULT = await fetch(API, API_OPTIONS);
    API_RESULT = API_RESULT.json();

    return API_RESULT;
    
  }

  handleSubmit(event){
    event.preventDefault();

    const {formName, formEmail, formPhone} = this.state;

    this.sendNewUserToAPI(formName, formEmail, formPhone)
      .then(result => {
        console.log("the result from API ", result);
      });
  }

  handleName(event){
    let formName = event.target.value;
    this.setState({
      formName
    });
  }

  handleEmail(event){
    let formEmail = event.target.value;
    this.setState({
      formEmail
    });
  }

  handlePhone(event){
    let formPhone = event.target.value;
    this.setState({
      formPhone
    });
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>New User Name:</label>
        <input type="text" value={this.state.formName} onChange={this.handleName} />

        <label>Enter User Email:</label>
        <input type="text" value={this.state.formEmail} onChange={this.handleEmail} />

        <label>Enter User Phone Number:</label>
        <input type="text" value={this.state.formPhone} onChange={this.handlePhone} />

        <button>Submit</button>

      </form>
    )
  }
}

export default AddUser;