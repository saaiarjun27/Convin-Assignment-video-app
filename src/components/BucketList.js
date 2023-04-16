import React, { useRef } from "react";
import { Link } from "react-router-dom";
import BucketCard from "./BucketCard";

const BucketList = (props) => {
  const inputEl = useRef("");
  const deletebucketHandler = (id) => {
    props.getbucketId(id);
  };

  const renderBucketList = props.buckets.map((bucket) => {
    return (
      <BucketCard
        bucket={bucket}
        clickHandler={deletebucketHandler}
        key={bucket.id}
      />
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div className="main">
      <h2>
        Watchlist
        <Link to="/history">
          <i className="history icon" style={{color:"grey"}}></i>
        </Link>
        
        <Link to="/add">
          <i className="plus square outline icon" style={{color:"purple"}}></i>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input 
          ref={inputEl}
          type="text" 
          placeholder="Search Watchlist" 
          className="prompt" 
          value={props.term} 
          onChange={getSearchTerm}></input>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">{renderBucketList.length > 0
          ? renderBucketList
          : "No Watchlists available"}</div>
    </div>
  );
};

export default BucketList;
