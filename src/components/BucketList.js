import React from "react";
import { Link } from "react-router-dom";
import BucketCard from "./BucketCard";

const BucketList = (props) => {

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
      <div className="ui celled list">{renderBucketList}</div>
    </div>
  );
};

export default BucketList;
