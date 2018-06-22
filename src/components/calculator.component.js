import React, { Component } from "react";

import ResultScreen from "./result_screen.component";
import CalcButtons from "./calc_buttons.component";
import CalcOperations from "./operations/operations.component";

import { Container, Row, Col } from "reactstrap";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repaymentsData: {}
    };

    this.setRepayData = this.setRepayData.bind(this);
  }

  setRepayData(respData) {
    this.setState({ repaymentsData: respData });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <ResultScreen setRepayData={this.setRepayData} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CalcButtons />
          </Col>
          <Col>
            <CalcOperations />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
