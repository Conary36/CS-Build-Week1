import React from "react";
import Grid from "./Grid";
import Buttons from "./Controls";
import Presets from "./Presets";


// state variable will be saved as state in the Main component which in charge of that variable.
// pass that variable to other components, that variable is going to become props. 
// state variable changes, it will automatically propagate to other components
/*
Double Buffering: There are two arrays of data for the automaton. One of them holds the data that the user currently sees on the canvas. The other one is where the next frame to be shown is being actively constructed. After the new frame is constructed, the next frame becomes the current frame, and the current frame becomes the next frame. And the process repeats.
*/
class Main extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 35;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(0))
    };
  }


   // never update a state directly, make a copy of the array instead
  // helper function - setState function --> updating a state
  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };

  // RANDOM/SEED
  seed = () => {
    let gridCopy = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0));

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = 1;
        }
      }
    }

    this.setState({
      gridFull: gridCopy,
      generation: 0
    });
    this.pauseButton();
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  slow = () => {
    this.speed = 1000;
    this.playButton();
  };

  fast = () => {
    this.speed = 100;
    this.playButton();
  };

   // refactor to call a function
  clear = () => {
    let grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0));

    this.setState({
      gridFull: grid,
      generation: 0
    });

    this.pauseButton();
  };

/* 
  // switch (size) {
    //   case "1":
    //     this.cols = 75;
    //     this.rows = 75;
    //     break;
    //   default:
    //     this.cols = 50;
    //     this.rows = 50;
    // }



*/

  gridSize = size => {
    if (size === 20){
            return {
                display: "grid",
                gridTemplateColumns: `repeat(${size}, 25px)`,
                gridTemplateRows: `repeat(${size},25px)`
            };
    }
        if (size === 40){
            return{
                display: "grid",
                gridTemplateColumns: `repeat(${size}, 15px)`,
                gridTemplateRows: `repeat(${size},15px)`
            }
        }
        if (size === 60){
            return{
                display: "grid",
                gridTemplateColumns: `repeat(${size}, 8px)`,
                gridTemplateRows: `repeat(${size},8px)`
            }
        }

   
    this.clear();
  };

  // Play Method & Game Logic
  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
// how many neighbors? 8 potential neighbors - decide if it's going to die or live
      for (let j = 0; j < this.cols; j++) {
        let count = 0; 
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;

        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = 0; 
        if (!g[i][j] && count === 3) g2[i][j] = 1; 
      }
    }

    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  };

  // PRESETS
  glider = () => {
    let gridCopy = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(0));

    gridCopy[1][3] = 1;
    gridCopy[2][1] = 1;
    gridCopy[2][3] = 1;
    gridCopy[3][2] = 1;
    gridCopy[3][3] = 1;

    this.setState({
      gridFull: gridCopy,
      generation: 0
    });
    this.pauseButton();
  };

pulsar = () => {
  let gridCopy = Array(this.rows)
  .fill()
  .map(() => Array(this.cols).fill(0))

    gridCopy[6][20] =1
    gridCopy[6][21] =1
    gridCopy[6][22] =1
    gridCopy[6][26] =1
    gridCopy[6][27] =1
    gridCopy[6][28] =1
    
    gridCopy[8][18] =1
    gridCopy[8][23] =1
    gridCopy[8][25] =1
    gridCopy[8][30] =1

    gridCopy[9][18] =1
    gridCopy[9][23] =1
    gridCopy[9][25] =1
    gridCopy[9][30] =1

    gridCopy[10][18] =1
    gridCopy[10][23] =1
    gridCopy[10][25] =1
    gridCopy[10][30] =1

    gridCopy[11][20] =1
    gridCopy[11][21] =1
    gridCopy[11][22] =1
    gridCopy[11][26] =1
    gridCopy[11][27] =1
    gridCopy[11][28] =1

    gridCopy[13][20] =1
    gridCopy[13][21] =1
    gridCopy[13][22] =1
    gridCopy[13][26] =1
    gridCopy[13][27] =1
    gridCopy[13][28] =1

    gridCopy[14][18] =1
    gridCopy[14][23] =1
    gridCopy[14][25] =1
    gridCopy[14][30] =1

    gridCopy[15][18] =1
    gridCopy[15][23] =1
    gridCopy[15][25] =1
    gridCopy[15][30] =1

    gridCopy[16][18] =1
    gridCopy[16][23] =1
    gridCopy[16][25] =1
    gridCopy[16][30] =1

    gridCopy[18][20] =1
    gridCopy[18][21] =1
    gridCopy[18][22] =1
    gridCopy[18][26] =1
    gridCopy[18][27] =1
    gridCopy[18][28] =1














    this.setState({
      gridFull: gridCopy,
      generation: 0
    })
    this.pauseButton();
}

gosperGun = () => {
    let gridCopy = Array(this.rows)
    .fill()
    .map(() => Array(this.cols).fill(0))



    gridCopy[5][1] =1
    gridCopy[5][2] =1
    gridCopy[6][1] =1
    gridCopy[6][2] = 1
    gridCopy[5][11] = 1
    gridCopy[6][11] = 1
    gridCopy[7][11] = 1
    gridCopy[4][12] = 1
    gridCopy[3][13] = 1
    gridCopy[3][14] = 1
    gridCopy[8][12] = 1
    gridCopy[9][13] = 1
    gridCopy[5][11] = 1
    gridCopy[6][11] = 1
    gridCopy[7][11] = 1
    gridCopy[4][12] = 1
    gridCopy[3][13] = 1
    gridCopy[3][14] = 1
    gridCopy[8][12] = 1
    gridCopy[9][13] = 1
    gridCopy[9][14] = 1
    gridCopy[6][15] = 1
    gridCopy[4][16] = 1
    gridCopy[5][17] = 1
    gridCopy[6][17] = 1
    gridCopy[7][17] = 1
    gridCopy[6][18] = 1
    gridCopy[8][16] = 1
    gridCopy[3][21] = 1
    gridCopy[4][21] = 1
    gridCopy[5][21] = 1
    gridCopy[3][22] = 1
    gridCopy[4][22] = 1
    gridCopy[5][22] = 1
    gridCopy[2][23] = 1
    gridCopy[6][23] = 1
    gridCopy[1][25] = 1
    gridCopy[2][25] = 1
    gridCopy[6][25] = 1 
    gridCopy[7][25] = 1
    gridCopy[3][35] = 1
    gridCopy[4][35] = 1
    gridCopy[3][36] = 1
    gridCopy[4][36] = 1
   


    this.setState({
      gridFull: gridCopy,
      generation: 0
    })
    this.pauseButton();


}
  // will be used as props in the Grid component
  render() {
    return (
      <div>
        <h1>John Horton Conway's <br/>Game of Life</h1>
        <div className="controls">
          <Buttons
            playButton={this.playButton}
            pauseButton={this.pauseButton}
            slow={this.slow}
            fast={this.fast}
            clear={this.clear}
            seed={this.seed}
            gridSize={this.gridSize}
          />
          <Presets
            glider={this.glider}
            pentaDecathlon={this.pentaDecathlon}
            pulsar={this.pulsar}
            gosperGun={this.gosperGun}
          />
        </div>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default Main;

