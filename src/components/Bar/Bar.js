import React from 'react'
import { Container } from 'react-bootstrap'
import { FaRedoAlt } from "react-icons/fa"
function Bar() {
    return (
        <div>

            <h1>Memory Game For Your Brain</h1>
            <Container>
                <div className="subHeader">
                    <div className="yourMoves">
                        <span>Moves:</span>
                    </div>
                    <div className="reshuffle"></div>
                    <button>
                        <FaRedoAlt />
                    </button>
                </div>
                <div className="">
                    <span>Best score:</span>
                </div>

            </Container>

        </div>
    )
}

export default Bar
