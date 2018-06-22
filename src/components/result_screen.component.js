import React, { Component } from 'react';

import { Input } from 'reactstrap';

class ResultScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Input name={this.props.name} className="text-right" id={this.props.id} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default ResultScreen;