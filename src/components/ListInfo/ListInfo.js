import React, { Component } from "react";
import axios from "axios";

import "./ListInfo.css";

class FullPost extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     expanded: false,
  //   };
  // }

  // open() {
  //   this.setState({ expanded: !this.state.expanded });
  // }

  // close() {
  //   this.setState({ expanded: !this.state.expanded });
  // }

  // render() {
  //   const info = this.props.listInfo;
  //   if (!this.state.expanded) {
  //     return <p onClick={this.open}>Show Info</p>;
  //   }
  //   return <div></div>;
  // }

  render() {
    return (
      <div className="FullPost">
        <h1>Title : {this.props.title}</h1>
        <h1>Episode : {this.props.episode}</h1>
        <h1>{this.props.opening}</h1>
      </div>
    );
  }
}

export default FullPost;
