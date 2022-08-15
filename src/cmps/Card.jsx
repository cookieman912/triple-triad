import React from "react";
import { useDrag } from "react-dnd";
import { itemTypes } from "../utils/itemTypes";

export default function Card (props) {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: itemTypes.CARD,
        item: { ...props },
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult()
            console.log(`You dropped ${item.id}`)
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }),
      }))


    let opacity = isDragging? 0 : 1 
    let card= {
        id:  props.id,
        name: 'Hydaelyn',
        team: props.teamColor,
        upScore: 7,
        downScore: 5,
        leftScore: 3,
        rightScore: 10,
    }

    return (
        <div className = {"card "+ card.team} ref={drag} style = {{opacity}}>
            <div className="card-name"><span>{card.name}</span></div>
            <div className = "up-score"><span>{card.upScore}</span></div>
            <div className = "down-score"><span>{card.downScore}</span></div>
            <div className = "left-score"><span>{card.leftScore}</span></div>
            <div className = "right-score"><span>{card.rightScore}</span></div>
        </div>
    )
 }

