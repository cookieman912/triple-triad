import React from "react";
import Board from "../cmps/Board";
import Hand from "../cmps/Hand";
export default function Game() {

    return (
        <main> 
            <Hand teamColor = "red-team"/>
            <Board/>
            <Hand teamColor = "blue-team"/>
        </main>
    )
}
