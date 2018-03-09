import React, {Component} from 'react';
const API = `http://localhost:3000/api/user/search`;

class SearchUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      formInput: 'Enter an ID'
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let id = this.state.formInput;
    
  }

  handleChange(event){
    let formInput = event.target.value;
    this.setState({
      formInput
    });
  }

  render(){
    return (
      <form onSubmit={this.handleChange}>
        <label>Enter a User ID to Search:</label>
        
        <input type="text" value={this.state.formInput} onChange={this.handleChange} />

      </form>
    )
  }
}

export default SearchUsers;