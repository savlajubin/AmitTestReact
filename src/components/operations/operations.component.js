import React, { Component } from "react";

class CalcOperations extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="input-group">
        <span className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            $
          </span>
        </span>
        <input
          name={this.props.name}
          type="text"
          className="form-control text-right"
          id={this.props.id}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default CalcOperations;
