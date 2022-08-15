import React from "react";
import { useDrop } from "react-dnd";
import { itemTypes } from "../utils/itemTypes";

export default function BoardCell(props) {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: itemTypes.CARD,
      drop: () => ({
        name: `${props.allowedDropEffect} Card`,
        allowedDropEffect: props.allowedDropEffect,
      }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [props.allowedDropEffect]
  )

  const isActive = canDrop && isOver

  return <div ref= {drop} className="board-cell" y={props.y} x={props.x}></div>;
}
