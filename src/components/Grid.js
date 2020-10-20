import React from "react"
import {displaySize, cellStyle} from "./displayFunctions"
import Footer from "./Footer"


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

        let grid = make2DArray(gridRows, gridCols);
        for (let i = 0; i < gridRows; i++){
            for(let j = 0; j < gridCols; j++){
                grid[i][j] = Math.floor(Math.random() * 2);
                
            }
        }
        this.state = {
            grid: grid, 
            playing: false,
            alive: 0,
            clickable: false
        };
        this.animation = null;
        console.log(grid);
    }

    componentDidMount() {
        if(this.animation !== null) {
            return;
        }
        this.animation = setInterval(() => {
            if(!this.state.playing) {
                console.log("Not playinbg");
                return;
            }
            const grid = this.state.grid;
            let agrid = make2DArray(gridRows, gridCols)

            for (let i = 0; i < gridRows; i++){
                for(let j = 0; j < gridCols; j++){
                    let live = 0;
                    for(let k = 0 ; k < operations.length; k++) {
                        let op = operations[k];
                        let x = op[0] + i;
                        let y = op[1] + j;
                        if(x >= 0 && x < gridCols && y >=0 && y < gridRows){
                            if(grid[x][y]) {
                                live++;
                            }
                        }
                    }
                    /*Any live cell with two or three live neighbours survives.
                        Any dead cell with three live neighbours becomes a live cell.
                        All other live cells die in the next generation. Similarly, all other dead cells stay dead.

                    */
                    if((live > 3 || live < 2) && grid[i][j] === 1) {
                        agrid[i][j] = 0;
                    }
                    else if(live === 3 && grid[i][j] === 0) {
                        agrid[i][j] = 1;
                    }
                    else {
                        agrid[i][j] = grid[i][j];
                    }
                }
                
            }
            
            this.setState({grid: agrid});
        }, 1000);
    }

    toggleCell =() =>{
         let grid = make2DArray(gridRows, gridCols);
        for (let i = 0; i < gridRows; i++){
            for(let j = 0; j < gridCols; j++){
                grid[i][j] = grid[i][j] ? this.state.alive : 1
            }
        }
    }


    onClick(e){
        ///FIND MOUSE CLICK HANDLER
    
    
    }

   stopAnimation () {
       this.setState({playing: false});
   }

   clearGrid() {
       this.setState({grid: this.map()});
   }

   play() {
       this.setState({playing: true});
   }
    

   render() {;
        const grid = this.state.grid;
        return(
            // 
            <div>   
            <div className='grid' style={{ display: 'grid', gridTemplateColumns: `repeat(${gridCols}, 20px)` }}>
                {grid.map((mapRows, i) => 
                mapRows.map((mapCols, j) => (
                    <div
                        key={`${i}-${j}`}
                        onClick={ (e) => this.onClick(e.target) }
                        // onClick= {this.state.grid}
                           
                         style={cellStyle(grid[i][j], grid[i][j]) }
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