import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class Presets extends React.Component {
  render() {
    return (
      <div className="center">
        <h4>Presets</h4>
        <ButtonToolbar>
          <Button variant="outline-light" size="sm" onClick={this.props.glider}>
          <img src="" alt="Glider"/>
          </Button>
          <Button
            variant="outline-light"
            size="sm"
            onClick={this.props.pulsar}
          >
            <img src="" alt="Pulsar"/>
          </Button>
           <Button
            variant="outline-light"
            size="sm"
            onClick={this.props.gosperGun}
          >
            <img src="" alt="Gosperr"/>
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Presets
