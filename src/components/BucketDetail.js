import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


function parseLink (links) {
const linksArray = links.split(',')
linksArray.forEach(element => {
  element = `"${element}"`
});
return linksArray;
}

const BucketDetail = (props) => {
  const { name, videos } = props.location.state.bucket;
  return (
    <div className="main">
      <div className="ui card centered" style={{position:"relative",paddingTop:"56.25%"}}>
        <ReactPlayer controls url={parseLink(videos)} width="100%" height="100%" style={{position:"absolute",top:"0",left:"0"}} />
      </div>
    </div>
  );
};

export default BucketDetail;
