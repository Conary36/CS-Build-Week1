import React from "react";
import Box from "./Box";

class Grid extends React.Component {
  render() {
    const width = this.props.cols * 14;
    let rowsArr = [];

    let boxClass = "";
    for (let i = 0; i < this.props.rows; i++) {
      for (let j = 0; j < this.props.cols; j++) {
        let boxId = i + "_" + j;

        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArr.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        );
      }
    }

    return (
      <div className="grid" style={{ width: width}}>
        {rowsArr}
      </div>
    );
  }
}

export default Grid;






























// import React from "react"
// import Box from './Box'
// import {displaySize, cellStyle} from "./displayFunctions"
// import Controls from "./Controls"

// const gridCols=30;
// const gridRows=30;
// const operations = [
//         [0, 1],
//         [0, -1],
//         [1, -1],
//         [-1, 1],
//         [1, 1],
//         [-1, -1],
//         [1, 0],
//         [-1, 0]
//     ];


// function make2DArray(rows, cols){
//         let arr = new Array(rows);
//         for (let i = 0; i < arr.length; i++){
//             arr[i] = new Array(cols);
//             for(let j = 0 ; j < cols ; j++) {
//                 arr[i][j] = 0;
//             }
//         }
       
//         return arr;
// }


        
// class Grid extends React.Component {

//     constructor(props) {
//         super(props);
//         console.log("CONSTRUCTOR ...")

//         let grid1 = make2DArray(gridRows, gridCols);
//         // for (let i = 0; i < gridRows; i++){
//         //     for(let j = 0; j < gridCols; j++){
//         //         // grid1[i][j] = Math.floor(Math.random() * 2);
//         //         let boxId = i + "_" + j;
                
//         //     }
//         // }

//         this.state = {
//             grid: grid1, 
//             playing: false,
//             alive: 0,
//             isToggleOn: true
            
//         };
        
//         this.handleClick = this.handleClick.bind(this);
//         this.animation = null;
//         console.log(grid1);
//     }

    

//     componentDidMount() {
//         if(this.animation !== null) {
//             return;
//         }
//         this.animation = setInterval(() => {
//             if(!this.state.playing) {
//                 console.log("Not playing");
//                 return;
//             }
//             const gridA = this.state.grid;
//             let agrid = make2DArray(gridRows, gridCols)

//             for (let i = 0; i < gridRows; i++){
//                 for(let j = 0; j < gridCols; j++){
//                     let neighbours = 0;
    
//                     for(let k = 0 ; k < operations.length; k++) {
//                         let op = operations[k];
//                         let x = op[0] + i;
//                         let y = op[1] + j;
                       
//                         if(x >= 0 && x < gridRows && y >=0 && y < gridCols){   
//                             if(gridA[x][y]) {
//                                 neighbours++; 
//                             } 
//                         }

//                     }
//                     /*Any live cell with two or three live neighbours survives.
//                         Any dead cell with three live neighbours becomes a live cell.
//                         All other live cells die in the next generation. Similarly, all other dead cells stay dead.

//                     */
//                     if((neighbours > 3 || neighbours < 2) && gridA[i][j] === 0) {
//                         agrid[i][j] = 0;
//                     }
//                     else if(neighbours === 3 && gridA[i][j] === 0) {
//                         agrid[i][j] = 1;
//                     }
//                     else {
//                         agrid[i][j] = gridA[i][j];
//                     }
//                 }
                
//             }
            
//             this.setState({grid: agrid});
//         }, 1000);
//     }



// handleClick =() => {
    
//         // e.preventDefault();
//         // this.setState(state => ({
//         // isToggleOn: !state.isToggleOn
   
        
//     // }));
//     console.log("Clicked!")
//   }

//    stopAnimation () {
//        this.setState({playing: false});
//    }

//    clearGrid() {
//        let clearGrid = make2DArray(gridRows, gridCols);
//         for (let i = 0; i < gridRows; i++){
//             for(let j = 0; j < gridCols; j++){
//                 clearGrid[i][j] = 0;
                
//             }
//         }
//        console.log("clear cliked")
//    }

//    play() {
//        this.setState({playing: true});
//    }


    

//    render() {
//         const cellGrid = this.state.grid;
//         return(

//             <div>
               
//                 <div className='grid' style={{ display: 'grid', gridTemplateColumns: `repeat(${gridCols}, 20px)` }}>
//                     </div> {cellGrid.map((Rows, i) => 
//                     Rows.map((Cols, j) => (
//                         <div
//                             key={`${i}-${j}`}
//                             onClick={this.handleClick}
                            
//                             // onClick={ (e) => this.onClick(e.target) }
//                             style={cellStyle(cellGrid[i][j], cellGrid[i][j]) }
//                         >
//                         </div>

//                     )))}
           
            
//             <Controls handleClick={this.handleClick.bind(this)} play={this.play.bind(this)} stopAnimation={this.stopAnimation.bind(this)}/>
//         </div>
        
//         )
//     }

// }

// export default Grid;