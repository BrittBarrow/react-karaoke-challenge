import React from "react";
import Lyrics from "./Lyrics";

const KaraokeDisplay = ({ showSong, handleLikes, handleDislikes }) => {
  return (
    <div className="karaoke-display">
      {showSong ? (
        <div>
          <button onClick={handleLikes}>Like</button>
          <button onClick={handleDislikes}>Dislike</button>
        </div>
      ) : null}
      <h2>{showSong ? showSong.title : ""}</h2>
      <Lyrics lyrics={showSong ? showSong.lyrics : ""} />
    </div>
  );
};

export default KaraokeDisplay;
