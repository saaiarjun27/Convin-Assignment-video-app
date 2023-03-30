import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import api from "../api/server";
import "./App.css";
import Header from "./Header";
import AddBucket from "./AddBucket";
import BucketList from "./BucketList";
import BucketDetail from "./BucketDetail";
import EditBucket from "./EditBucket";
import HistoryList from "./HistoryList";

function App() {
  const LOCAL_STORAGE_KEY = "buckets";
  const [buckets, setbuckets] = useState([]);

  //Retrievebuckets
  const retrievebuckets = async () => {
    const response = await api.get("/buckets");
    return response.data;
  };

  const addbucketHandler = async (bucket) => {
    const request = {
      id: uuid(),
      ...bucket,
    };

    const response = await api.post("/buckets", request);
    setbuckets([...buckets, response.data]);
  };

  const updatebucketHandler = async (bucket) => {
    const response = await api.put(`/buckets/${bucket.id}`, bucket);
    const { id, name, videos } = response.data;
    setbuckets(
      buckets.map((bucket) => {
        return bucket.id === id ? { ...response.data } : bucket;
      })
    );
  };

  const removebucketHandler = async (id) => {
    await api.delete(`/buckets/${id}`);
    const newBucketList = buckets.filter((bucket) => {
      return bucket.id !== id;
    });

    setbuckets(newBucketList);
  };

  useEffect(() => {
    // const retrivebuckets = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrivebuckets) setbuckets(retrivebuckets);
    const getAllbuckets = async () => {
      const allbuckets = await retrievebuckets();
      if (allbuckets) setbuckets(allbuckets);
    };

    getAllbuckets();
  }, []);

  useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(buckets));
  }, [buckets]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <BucketList
                {...props}
                buckets={buckets}
                getbucketId={removebucketHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddBucket {...props} addbucketHandler={addbucketHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditBucket
                {...props}
                updatebucketHandler={updatebucketHandler}
              />
            )}
          />

          <Route path="/watchlist/:id" component={BucketDetail} />
          <Route path="/history" component={HistoryList} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
