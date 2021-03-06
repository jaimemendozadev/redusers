import React, {Component} from 'react';
const API = `http://localhost:3000/api/user/search`;


class SearchUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      formInput: 'Enter an ID'
    }
    this.sendSearchToAPI = this.sendSearchToAPI.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    
  }

  async sendSearchToAPI(id){
    //must specify headers and stingify body
    let API_OPTIONS = {
      method: 'POST',
      headers : new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify({id})
    };

    let API_RESULT = await fetch(API, API_OPTIONS);
    API_RESULT = API_RESULT.json();

    return API_RESULT;
    
  }

  handleSubmit(event){
    event.preventDefault();

    let id = this.state.formInput;

    this.sendSearchToAPI(id)
      .then(result => {
        console.log("the result from API ", result);
      });
  }

  handleChange(event){
    let formInput = event.target.value;
    this.setState({
      formInput
    });


  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter a User ID to Search:</label>
        
        <input type="text" value={this.state.formInput} onChange={this.handleChange} />

      </form>
    )
  }
}

export default SearchUsers;