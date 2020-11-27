import React, { Component } from "react";

import "./List.css";

class List extends Component {
  state = {
    click: true,
  };

  clicked = () => {
    this.setState({ click: !this.state.click });
  };

  render() {
    return (
      <div className="List" onClick={this.clicked}>
        {this.state.click ? (
          <h1>{this.props.title}</h1>
        ) : (
          <h1>
            Title : {this.props.title} <br />
            Episode : {this.props.episode} <br />
            {this.props.opening} <br />
            Director : {this.props.director} <br />
            Producer : {this.props.producer} <br />
            Date : {this.props.date} <br />
          </h1>
        )}
      </div>
    );
  }
}

export default List;
