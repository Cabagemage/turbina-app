import React, { useState, useEffect, useRef, memo } from "react";
import Song from "./Song";
import Playlist from "./Playlist";
import PlayButton from "./PlayButton";
import SwitchButton from "./SwitchButton";
import ExpanderButton from "./ExpanderButton";
import VideoButton from "./VideoButton";
import Cover from "./Cover";
import { songs } from "../../utils/songs.js";
import throttle from "../../utils/throttling.js";
const classNames = require("classnames");

function AudioPlayer() {
  const myPlayer = useRef(null);
  let [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [lyricsShown, setLyricsShown] = useState(songs.length < 2);
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[index]);
  const onTimeUpdate = throttle((e) => {
    setCurTime(e.target.currentTime);
  }, 1000);

  const onPlay = (e) => {
    setDuration(e.target.duration);
  };

  useEffect(() => {
    playing ? myPlayer.current.play() : myPlayer.current.pause();
    setDuration(myPlayer.current.duration);
    myPlayer.current.addEventListener("ended", function (e) {
      console.log(index, currentSong, setCurrentSong);
      if (currentSong) {
        setIndex(++index);
        setCurrentSong(songs[index]);
      } else {
        myPlayer.current.loop = true;
      }
    });
  });

  function toggleExpanded() {
    setExpanded(!expanded);
  }
  function toggleLyricsShown() {
    setLyricsShown(!lyricsShown);
  }

  function changeCurrentSong(song) {
    setCurrentSong(song);
  }

  return (
    <>
      <audio
        ref={myPlayer}
        src={currentSong ? currentSong.audio : null}
        onPlay={onPlay}
        onTimeUpdate={onTimeUpdate}
      >
        Your browser does not support the <code>audio</code> element.
      </audio>

      {/* Layout in Audioplayer is controlled by grid-area. Two main states are expanded===true (audioplayer_expanded) and expanded===false (audioplayer_collapsed) */}
      <div
        className={classNames("audioplayer", {
          audioplayer_expanded: expanded,
          audioplayer_collapsed: !expanded,
        })}
      >
        {/* grid-area: play-button */}
        <PlayButton
          handleClick={() => setPlaying(!playing)}
          isPlaying={playing}
        />

        {/* grid-area: song */}
        <Song
          title={currentSong ? currentSong.title : "Nazvanie"}
          musician={currentSong ? currentSong.musician : "default"}
          poet={currentSong ? currentSong.poet : "default"}
          duration={duration ? duration : null}
          curTime={curTime ? curTime : null}
          onClick={(curTime) => {
            myPlayer.current.currentTime = curTime;
          }}
        />

        {/* grid-area: expander-button */}
        <ExpanderButton onClick={toggleExpanded} isExpanded={expanded} />

        {/* Following elements are rendered only when expanded===true (style: audioplayer_expanded)*/}

        {/* grid-area: video-button */}
        {/* && currentSong.videoUrl */}
        {expanded && <VideoButton url={currentSong ? currentSong.videoUrl : null} />}

        {/* grid-area: switch-button */}
        {expanded && (
          <SwitchButton lyricsShown={lyricsShown} onClick={toggleLyricsShown} />
        )}

        {/* grid-area: cover */}
        {expanded && <Cover cover={currentSong ? currentSong.cover : null} />}

        {/* grid-area: expanded-box */}
        {expanded && (
          <div className="expanded-box">
            <h3 className="expanded-box__heading">
              {lyricsShown ? "Текст песни:" : "Релизы:"}
            </h3>
            {lyricsShown && (
              <p className="expanded-box__text">
                {currentSong ? currentSong.lyrics : "Здесь должно что-то быть"}
              </p>
            )}
            {!lyricsShown && (
              <Playlist songs={songs} changeCurSong={changeCurrentSong} />
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default memo(AudioPlayer);
