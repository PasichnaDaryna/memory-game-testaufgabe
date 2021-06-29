import React from 'react'
import classnames from "classnames";
import backpic from "../../images/backpic.jpg"
import frontpic from "../../images/image1.jpg"


const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };
    return (
        <div
            className={classnames("card", {
                "flipped": isFlipped,
                "inactive": isInactive,
            })}
            onClick={handleClick}
        >
            <div className="cardFace cardFontFace">
                <img src={backpic} className="image" alt="back-pic" />
            </div>

            <div className="card">
                <div className="cardFace cardBackFace">
                    <img src={card.image} className="image" alt="front-pic" />
                </div>

            </div>

        </div>
    )
}


export default Card;