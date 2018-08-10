import React, { Component } from "react";

class Song extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plays: this.props.song.plays,
      likes: this.props.song.likes,
      dislikes: this.props.song.dislikes
    };
  }

  handlePlayFunctions = () => {
    this.props.handlePlayButton(this.props.song.id);
    this.increasePlays();
    this.updatePlayFetch();
  };

  increasePlays() {
    let newState = this.state.plays + 1;
    this.setState({
      plays: newState
    });
  }

  updatePlayFetch() {
    fetch(`http://localhost:3000/users/3/songs/${this.props.song.id}/play`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" }
    });
  }

  render() {
    return (
      <tr key={this.props.song.id}>
        <td>{this.props.song.title}</td>
        <td>{this.props.song.singer}</td>
        <td>{this.props.song.likes}</td>
        <td>{this.props.song.dislikes}</td>
        <td>{this.state.plays}</td>
        <td>
          <button onClick={this.handlePlayFunctions}>Play</button>
        </td>
      </tr>
    );
  }
}

export default Song;
