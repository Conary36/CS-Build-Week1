import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";

class Presets extends React.Component {
  render() {
    return (
      <div className="center">
        <h4>Presets</h4>
        <ButtonToolbar>
          <Button variant="info" size="sm" onClick={this.props.glider}>
          Glider
          </Button>
          <Button
            variant="info"
            size="sm"
            onClick={this.props.pulsar}
          >
          Pulsar
          </Button>
           <Button
            variant="danger"
            size="sm"
            onClick={this.props.gosperGun}
          >
          GosperGun
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Presets
