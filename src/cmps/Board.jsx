import React from "react";
import BoardCol from './BoardCol'

export default function Board () {
    let BoardCols = [1,2,3]
    return (
        <div className="board">
            
            {
               BoardCols.map(column => {
                return <BoardCol
                 key = {column}
                 y = {column}
                 />;
               }) 
            }
        </div>
    )
}
