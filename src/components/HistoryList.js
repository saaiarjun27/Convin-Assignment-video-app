import React,{useState, useEffect} from 'react';
import api from "../api/server";
import History from './History';

const HistoryList = (props) =>{
    const [hist, setHist] = useState([]);

    const retrieveHistory = async () => {
        const response = await api.get("/historyStorage");
        return response.data;
      };

      useEffect(() => {
        const getAllHistory = async () => {
          const allHistory = await retrieveHistory();
          if (allHistory) setHist(allHistory);
        };
    
        getAllHistory();
      }, []);

      const renderHistoryList = hist.map((history) => {
        return (
          <History
            history={history}
            key={history.id}
          />
        );
      });
      return (
        <div className="main">
          <h2>
            History
          </h2>
          <div className="ui celled list">{renderHistoryList.reverse()}</div>
        </div>
      );
};
export default HistoryList;