import React from 'react';
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

const History = (props) =>{
  const { id, name, time } = props.history;
  return (
    <div className="item">
      <div className="content" onClick={() => setHistory(id, name)}>
        <Link
          to={{ pathname: `/watchlist/${id}`, state: { bucket: props.bucket } }}
        >
          <div className="header">{name}</div>
          <div>{time}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginLeft: "10px",marginTop:"-25px"}}
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};
export default History;