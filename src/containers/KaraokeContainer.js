import React, { Component } from "react";
import Filter from "../components/Filter";
import SongList from "../components/SongList";
import KaraokeDisplay from "../components/KaraokeDisplay";
import songs from "../data/songs";

class KaraokeContainer extends Component {
  constructor() {
    super();

    this.state = {
      songs: [],
      filter: "",
      currentSong: null
    };
  }

  getSongs() {
    fetch("http://localhost:3000/users/3/songs")
      .then(resp => resp.json())
      .then(data => this.setState({ songs: data }));
  }

  componentDidMount() {
    this.getSongs();
  }

  handlePlayButton = id => {
    const match = this.state.songs.find(song => song.id === id);
    this.setState({
      currentSong: match
    });
  };

  handleChange = e => {
    this.setState({
      filter: e.target.value
    });
  };

  handleLikes = () => {
    fetch(
      `http://localhost:3000/users/3/songs/${this.state.currentSong.id}/like`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          currentSong: data
        })
      );
    this.getSongs();
  };

  handleDislikes = () => {
    fetch(
      `http://localhost:3000/users/3/songs/${
        this.state.currentSong.id
      }/dislike`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" }
      }
    )
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          currentSong: data
        })
      );
    this.getSongs();
  };

  render() {
    console.log("redndering");
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter handleChange={this.handleChange} />
          <SongList
            currentSong={this.state.currentSong}
            songList={this.state.songs.filter(song =>
              song.title.includes(this.state.filter)
            )}
            handlePlayButton={this.handlePlayButton}
          />
        </div>
        <KaraokeDisplay
          showSong={this.state.currentSong}
          handleLikes={this.handleLikes}
          handleDislikes={this.handleDislikes}
        />
      </div>
    );
  }
}

export default KaraokeContainer;
