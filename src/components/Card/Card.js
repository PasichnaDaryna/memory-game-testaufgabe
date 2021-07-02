import React from 'react'
import classnames from "classnames";
import './Card.css';
import backpic from "../../images/backpic.jpg"



const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
    const handleClick = () => {
        !isFlipped && !isDisabled && onClick(index);
    };
    return (
        <div onClick={handleClick}
            className={classnames("card", {
                "flipped": isFlipped,
                "inactive": isInactive,
            })}

        >
            <div className="card-face card-font-face">
                <img src={backpic} className="image" alt="back-pic" />
            </div>


            <div className="card-face card-back-face">
                <img src={card.image} className="image" alt="front-pic" />
            </div>



        </div>
    )
}


export default Card;