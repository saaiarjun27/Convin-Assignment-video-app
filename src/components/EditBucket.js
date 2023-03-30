import React from "react";

class EditBucket extends React.Component {
  constructor(props) {
    super(props);
    const { id, name, videos } = props.location.state.bucket;
    this.state = {
      id,
      name,
      videos,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.videos === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updatebucketHandler(this.state);
    this.setState({ name: "", videos: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Edit Card</h2>
        <form className="ui form" onSubmit={this.update}>
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
              placeholder="Link"
              value={this.state.videos}
              onChange={(e) => this.setState({ videos: e.target.value })}
            />
          </div>
          <button className="ui button blue">Update</button>
        </form>
      </div>
    );
  }
}

export default EditBucket;
