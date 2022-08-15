import React from "react";
import Board from "../cmps/Board";
import Hand from "../cmps/Hand";
function Game() {

    return (
        <main> 
            <Hand teamColor = "red-team"/>
            <Board/>
            <Hand teamColor = "blue-team"/>
        </main>
    )
}

export default Game()