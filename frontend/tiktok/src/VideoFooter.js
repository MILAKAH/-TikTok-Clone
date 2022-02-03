import React from 'react';
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker"
function VideoFooter({channel,description,song}) {
  return <div className="VideoFooter">
    <div className="VideoFooter_text">
        <h3>@{channel}</h3>
        <p>{ description}</p>
<div className="VideoFooter_ticker">
    <MusicNoteIcon className="videoFooter_icon"/>
    <Ticker mode="smooth">
        {({index}) =>(
            <>
            <p> {song}</p>
            </>
        )
        }
    </Ticker>
</div>


    </div>
    <img className="VideoFooter_record" src="https://static.thenounproject.com/png/934821-200.png"/>
  </div>;
}

export default VideoFooter;
