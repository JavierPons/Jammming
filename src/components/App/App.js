import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           searchResults : [ name, artist, album ];  
            
        }
        
    }
    
    
    
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      < SearchResults searchResults ={this.state.searchResults}>
      <!-- Add a Playlist component -->
    </div>
  </div>
</div>
    );
  }
}

export default App;


App.js

import React, { Component } from 'react';
import Message from '../Message/Message';

class App extends Component {
  render() {
    return (
      <Message str="Hello!" />
    );
  }
}

export default App;




Message.js
import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <p>{this.props.str}</p>
    );
  }
}

export default Message;