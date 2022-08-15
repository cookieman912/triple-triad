import React from "react";
import Card from "./Card";

export default function Hand (props) {
let Cards = [0,0,0,0,0];
let mockId = 0;
        return (
            <div className="hand">
                {Cards.map(card => {
                    mockId++;
                    return <Card 
                        teamColor = {props.teamColor}
                        id = {mockId}
                        key = {mockId}
                    />;
                })}
            </div>
        )
};