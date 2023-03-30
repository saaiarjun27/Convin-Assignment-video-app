import React from 'react';

const History = (props) =>{
  const { id, name, time } = props.history;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};
export default History;