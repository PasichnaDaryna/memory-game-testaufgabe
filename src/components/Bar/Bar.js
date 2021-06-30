import React from 'react'
import { Container } from 'react-bootstrap'
import { FaRedoAlt } from "react-icons/fa"
import "./Bar.css"
function Bar({ moves, bestScore, handleRestart }) {
    return (
        <div>

            <h1>Memory Game For Your Brain</h1>
            <Container>
                <div className="sub-header">
                    <div className="your-moves">
                        <span>Moves:</span> {moves}
                    </div>
                    <div className="reshuffle"></div>
                    <button
                        onClick={handleRestart}>
                        <FaRedoAlt />
                    </button>
                    {localStorage.getItem("bestScore") && (
                        <div className="best-score">
                            <span>Best score:</span>
                            {bestScore}
                        </div>)}
                </div>
            </Container>

        </div>
    )
}

export default Bar
