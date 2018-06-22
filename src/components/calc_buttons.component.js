import React, { Component } from "react";
import { Row, Col, Button, ButtonGroup } from "reactstrap";

import "./calc_buttons.component.css";

class CalcButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row>
          <ButtonGroup>
            <Button color="primary" size="lg" block>
              1
            </Button>
            <Button color="primary" size="lg" block>
              2
            </Button>
            <Button color="primary" size="lg" block>
              3
            </Button>
          </ButtonGroup>
        </Row>
        <Row>
          <ButtonGroup>
            <Button color="primary" size="lg" block>
              4
            </Button>
            <Button color="primary" size="lg" block>
              5
            </Button>
            <Button color="primary" size="lg" block>
              6
            </Button>
          </ButtonGroup>
        </Row>
        <Row>
          <ButtonGroup>
            <Button color="primary" size="lg" block>
              7
            </Button>
            <Button color="primary" size="lg" block>
              8
            </Button>
            <Button color="primary" size="lg" block>
              9
            </Button>
          </ButtonGroup>
        </Row>
        <Row>
          <ButtonGroup>
            <Button color="primary" size="lg" block>
              0
            </Button>
            <Button color="primary" size="lg" block>
              =
            </Button>
          </ButtonGroup>
        </Row>
      </div>
    );
  }
}

export default CalcButtons;
