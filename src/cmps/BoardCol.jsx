import React from "react";
import BoardCell from "./BoardCell";

export default function BoardRow (props) {
    let BoardCells = [1,2,3]
    return (
        <div className="board-row">
            {BoardCells.map(cell => {
                return <BoardCell
                key = {cell}
                x = {cell}
                y = {props.y}
                allowedDropEffect = "move"
                />
            })}
        </div>
    )
}
