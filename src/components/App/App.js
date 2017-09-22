import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           searchResults : [ name, artist, album ],
            playListName : '',
            playListTrack: []
            
        }
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
    }
    
     addTrack(track) {
    let tracks = this.state.playListTrack;
        if(!tracks = track){
            tracks.push(track);
            this.setState({playListTrack: tracks});
        }
        
    }
    
    removeTrack(track) {
       let tracks = this.state.playListTrack; 
        
    }
    
    updatePlaylistName(name) {
        
       this.setState({playListName: name}); 
    }
    
    savePlaylist() {
        
      const trackURIs = this.state.playListTrack.map(track => track.uri);
        
    }
    
   
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <!-- Add a SearchBar component -->
    <div className="App-playlist">
      < SearchResults searchResults ={this.state.searchResults} onAdd={this.addTrack}/>
      <Playlist playlistName={this.state.playlistName}
        playlistTracks={this.state.playlistTracks}
        onRemove={this.removeTrack}
        onNameChange={this.updatePlaylistName}
        onSave={this.savePlaylist}
        />
    </div>
  </div>
</div>
    );
  }
}

export default App;




