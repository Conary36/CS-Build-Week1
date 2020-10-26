import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class Buttons extends React.Component {
  handleSelect = e => {
    this.props.gridSize(e);
  };

  render() {
    return (
      <div className="center">
        <h4>Controls</h4>
        <ButtonToolbar>
          <Button
            variant="success"
            size="sm"
            onClick={this.props.playButton}
          >
           Play
          </Button>
          <Button
            variant="warning"
            size="sm"
            onClick={this.props.pauseButton}
          >
           Pause
          </Button>
          <Button variant="secondary" size="sm" onClick={this.props.clear}>
           Clear
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.slow}>
            Slow
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.fast}>
            Fast
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.seed}>
            Seed
          </Button>
         
          <DropdownButton
           
            variant="light"
            size="sm"
            title="Grid Size"
            id=" dropdown-basic-button"
            background-color="white"
            onSelect={this.handleSelect}
            
          >
            <div className="dpItem">
            <DropdownItem className="drop">50X50</DropdownItem>
            {/* <br/> */}
            <DropdownItem className="drop" eventKey="1">25X25</DropdownItem>
            <DropdownItem className="drop" eventKey="2">15X15</DropdownItem>
            <DropdownItem className="drop" eventKey="3">8X8</DropdownItem>
            </div>
          </DropdownButton>

        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;









// import React from 'react'

// const Controls = ({play, stopAnimation, clearGrid}) => {
//     return (
//         <div>
//             <div>
//                 <button onClick={play }>Play</button>
//                 <button onClick={stopAnimation }>Stop</button>
//                 <button onClick={clearGrid }>Clear</button>
//             </div>
//         </div>
//     )
// }

// export default Controls;




 
    