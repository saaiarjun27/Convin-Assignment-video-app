import React from "react";

class AddBucket extends React.Component {
  state = {
    name: "",
    videos: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.videos === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addbucketHandler(this.state);
    this.setState({ name: "", videos: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Watchlist</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Link</label>
            <input
              type="text"
              name="videos"
              placeholder="Example: https://www.youtube.com/watch?v=oUFJJNQGwhk, https://www.youtube.com/watch?v=jNgP6d9HraI,......"
              value={this.state.videos}
              onChange={(e) => this.setState({ videos: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddBucket;
