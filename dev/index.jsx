import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchUsers from './components/SearchUsers.jsx';

const SERVER = 'http://localhost:3000/api';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: null
    }
    this.fetchRedisUsers = this.fetchRedisUsers.bind(this);
  }

  

  async fetchRedisUsers() {
    let results = await fetch(SERVER);
    
    results = await results.json();

    return results;
  }
  
  componentDidMount(){
    let result = this.fetchRedisUsers().then(result => {
        this.setState({result})
    });
  }
  render(){
    return(
      <div>
        <h1>Redis App</h1>
        <SearchUsers />
      </div>
    )
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));