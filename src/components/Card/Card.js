import React from 'react'
import s from './Card'

import backpic from "../../images/backpic.jpg"
import frontpic from "../../images/image1.jpg"
export default function Card() {
    return (
        <div className="card">
            <div className="cardFace cardFontFace">
                <img src={backpic} className="image" alt="back-pic" />
            </div>

            <div className="card">
                <div className="cardFace">
                    <img src={frontpic} className="image" alt="front-pic" />
                </div>

            </div>

        </div>
    )
}
