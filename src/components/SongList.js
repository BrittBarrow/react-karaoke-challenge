import React from "react";
import Song from "./Song";

const SongList = ({ songList, handlePlayButton, currentSong }) => {
  console.log(currentSong);
  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Plays</th>
          <th>▶</th>
        </tr>

        {songList.map(song => (
          <Song key={song.id} song={song} handlePlayButton={handlePlayButton} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
