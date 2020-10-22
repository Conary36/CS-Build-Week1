import React from "react"
import {displaySize, cellStyle} from "./displayFunctions"



const gridCols=30;
const gridRows=30;
const PI = Math.PI; // 3.141592653589793
const TWO_PI = 2 * PI; // 6.283185307179586

const operations = [
        [0, 1],
        [0, -1],
        [1, -1],
        [-1, 1],
        [1, 1],
        [-1, -1],
        [1, 0],
        [-1, 0]
    ];

function make2DArray(rows, cols){
        let arr = new Array(rows);
        for (let i = 0; i < arr.length; i++){
            arr[i] = new Array(cols);
            for(let j = 0 ; j < cols ; j++) {
                arr[i][j] = 0;
            }
        }
       
        return arr;
}


        
class Grid extends React.Component {

    constructor(props) {
        super(props);
        console.log("CONSTRUCTOR ...")

        let grid1 = make2DArray(gridRows, gridCols);
        for (let i = 0; i < gridRows; i++){
            for(let j = 0; j < gridCols; j++){
                // grid1[i][j] = Math.floor(Math.random() * 2);
                
            }
        }

        this.state = {
            grid: grid1, 
            playing: false,
            alive: 0,
            isToggleOn: true
            
        };
        this.handleClick = this.handleClick.bind(this);
        this.animation = null;
        console.log(grid1);
    }

    componentDidMount() {
        if(this.animation !== null) {
            return;
        }
        this.animation = setInterval(() => {
            if(!this.state.playing) {
                console.log("Not playing");
                return;
            }
            const gridA = this.state.grid;
            let agrid = make2DArray(gridRows, gridCols)

            for (let i = 0; i < gridRows; i++){
                for(let j = 0; j < gridCols; j++){
                    let neighbours = 0;
    
                    for(let k = 0 ; k < operations.length; k++) {
                        let op = operations[k];
                        let x = op[0] + i;
                        let y = op[1] + j;
                       
                        if(x >= 0 && x < gridRows && y >=0 && y < gridCols){
                                
                            if(gridA[x][y]) {
                                neighbours++;
                                
                            } 
                        }

                    }
                    /*Any live cell with two or three live neighbours survives.
                        Any dead cell with three live neighbours becomes a live cell.
                        All other live cells die in the next generation. Similarly, all other dead cells stay dead.

                    */
                    if((neighbours > 3 || neighbours < 2) && gridA[i][j] === 0) {
                        agrid[i][j] = 0;
                    }
                    else if(neighbours === 3 && gridA[i][j] === 0) {
                        agrid[i][j] = 1;
                    }
                    else {
                        agrid[i][j] = gridA[i][j];
                    }
                }
                
            }
            
            this.setState({grid: agrid});
        }, 1000);
    }

    // toggleCell =() =>{
    //      let grid = make2DArray(gridRows, gridCols);
    //     for (let i = 0; i < gridRows; i++){
    //         for(let j = 0; j < gridCols; j++){
    //             grid[i][j] = grid[i][j] ? this.state.alive : 1
    //         }
    //     }
    // }


    handleClick =(e) => {
        e.preventDefault();
        this.setState(state => ({
        isToggleOn: !state.isToggleOn
        
    }));
    console.log("Clicked!")
  }

   stopAnimation () {
       this.setState({playing: false});
   }

   clearGrid() {
       let clearGrid = make2DArray(gridRows, gridCols);
        for (let i = 0; i < gridRows; i++){
            for(let j = 0; j < gridCols; j++){
                clearGrid[i][j] = 0;
                
            }
        }
       console.log("clear cliked")
   }

   play() {
       this.setState({playing: true});
   }
    

   render() {
        const cellGrid = this.state.grid;
        return(
            // 
            <div>   
            <div className='grid' style={{ display: 'grid', gridTemplateColumns: `repeat(${gridCols}, 20px)` }}>
                {cellGrid.map((Rows, i) => 
                Rows.map((Cols, j) => (
                    <div
                        key={`${i}-${j}`}
                        onClick={this.handleClick}
                        
                        // onClick={ (e) => this.onClick(e.target) }
                         style={cellStyle(cellGrid[i][j], cellGrid[i][j]) }
                    >
                    </div>

                )))}
            </div>
            
            <button onClick={ () => this.play() }>Play</button>
            <button onClick={ () => this.stopAnimation() }>Stop</button>
            <button onClick={ () => this.clearGrid() }>Clear</button>
        </div>
        
        )
    }

}

export default Grid;