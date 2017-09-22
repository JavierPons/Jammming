import React from 'react';
import './TrackList';
import './Playlist.css';

class Playlist extends React.Component{
    constructor(props) {
        super(props);
        
        this.onNameChange = this.onNameChange.bind(this);
        
    }
    
    
    
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    
    render(){
        return(
        <div className="Playlist" >
        <input defaultValue={'New Playlist'} 
            onChange={this.handleNameChange}/>
            <TrackList  track={this.props.playlistTracks}
            onRemove={this.props.onRemove}>
            <a class="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
            </div>
        )
        
    }
}

export default Playlist;
