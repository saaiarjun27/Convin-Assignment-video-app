import React from "react";
import {uuid} from "uuidv4";
import api from '../api/server'
import { Link } from "react-router-dom";

const setHistory = async (id, name) => {
  const request = {
    id: uuid(),
    histid: id,
    name: name,
    time: new Date()
  };
  const response = await api.post("/historyStorage", request);
}

const BucketCard = (props) => {
  const { id, name, videos } = props.bucket;
  return (
    <div className="item">
      <img className="ui image" style={{height:"35px"}} src={"https://cdn-icons-png.flaticon.com/512/4404/4404094.png"} alt="" />
      <div className="content" onClick={() => setHistory(id, name)}>
        <Link
          to={{ pathname: `/watchlist/${id}`, state: { bucket: props.bucket } }}
        >
          <div className="header">{name}</div>
          <div>{videos}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <Link to={{ pathname: `/edit`, state: { bucket: props.bucket } }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
        ></i>
      </Link>
    </div>
  );
};

export default BucketCard;
