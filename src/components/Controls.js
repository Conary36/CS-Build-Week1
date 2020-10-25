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
            <img src="" alt="Pause" />
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.clear}>
          <img src="" alt="Delete"/>
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.slow}>
          <img src="" alt="Slow"/>
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.fast}>
          <img src="" alt="fast"/>
          </Button>
          <Button variant="outline-light" size="sm" onClick={this.props.seed}>
          <img src="" alt="Random"/>
          </Button>
         
          <DropdownButton
           
            variant="outline-light"
            size="sm"
            title="Grid Size"
            id=" dropdown-basic-button"
            background-color="white"
            onSelect={this.handleSelect}
            
          >
            <div className="dpItem">
            <DropdownItem className="drop">50X50</DropdownItem>
            {/* <br/> */}
            <DropdownItem className="drop" eventKey="1">75X75</DropdownItem>
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




 
    