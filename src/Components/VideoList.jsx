import React from "react";
import Video from "./Video";

function VideoList(props) {
    return props.list.map((item, i) => <Video url={item.url} date={item.date} key={i} />);
  }


  export default VideoList;