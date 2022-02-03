import React,{useState} from 'react';
import "./VideoSidebar.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/Favorite';

function VideoSidebar({likes,shares,massages}) {
  const [liked,setLiked]= useState(false)
  return <div className="video-sidebar">
    <div className="videoSidebar">
      <div className="videoSidebar_button">
        {liked?(
      <FavoriteIcon fontSize="large" onClick={e=>setLiked(false)}/>
        ):(
          <FavoriteBorderIcon
          fontSize="large"
          onClick={(e)=>setLiked(true)} />
        )}
      <p>{liked? likes+1 :likes}</p>
    </div>
    <div className="videoSidebar_button">
      <MessageIcon fontSize="large"/>
      <p>{massages}</p>
    </div>
    <div className="videoSidebar_button">
      <ShareIcon fontSize="large"/>
      <p>{shares}</p>
    </div>
  </div>;
  </div>;
}

export default VideoSidebar;
