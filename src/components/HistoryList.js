import React, { useRef } from "react";
import History from './History';

const HistoryList = (props) =>{
  const inputEl = useRef("");
  const deletehistoryHandler = (id) => {
    props.gethistoryId(id);
  };

  const renderHistoryList = props.hist?.map((history) => {
    return (
      <History
        history={history}
        clickHandler={deletehistoryHandler}
        key={history.id}
      />
    );
  });
  const getSearchhistoryTerm = () => {
    props.searchhistoryKeyword(inputEl.current.value);
  };
  return (
    <div className="main">
      <h2>
        History
      </h2>
      <div className="ui search">
        <div className="ui icon input">
          <input 
          ref={inputEl}
          type="text" 
          placeholder="Search History" 
          className="prompt" 
          value={props.term} 
          onChange={getSearchhistoryTerm}></input>
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
      {renderHistoryList.length > 0
      ? renderHistoryList.reverse()
      : "No History available"}</div>
    </div>
  );
};
export default HistoryList;