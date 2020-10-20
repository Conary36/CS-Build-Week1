export const displaySize = size => {
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
}

const cellSize = size =>{
    // if (size === 20){
    //     return '25px'
    // }
    // if (size === 40){
    //     return '15px'
    // }
    // if (size === 60){
    //     return '8px'
    // }
    return '25px'
}

export const cellStyle = (alive, size) => {
    const randomColor1 = Math.floor(Math.random() * Math.floor(255))
    const randomColor2 = Math.floor(Math.random() * Math.floor(255))
    const randomColor3 = Math.floor(Math.random() * Math.floor(255))
    // console.log(alive, size)
    // return {background: `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`, width: cellSize(size), height: cellSize(size)}
    if(alive){
        return {
            width: cellSize(size),
            height: cellSize(size),
            background: `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`
        };
    

    }else{
        return{
            width: cellSize(size),
            height: cellSize(size),
            background: "white"
        }
    }
} 