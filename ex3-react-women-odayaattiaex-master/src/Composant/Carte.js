import React from "react";
import "../Csscomposant/Carte.css";

function Card({ id, number, onCardClick, isFlipped, image }) {
    return (
        // Card container with an onClick handler to handle card click events
        <div className="carte col-3 m-1" onClick={() => onCardClick(id, number)}>
            {/* Inner container to manage flip state */}
            <div className={`carte-inner ${isFlipped ? "flipped" : ""}`}>
                {/* Front side of the card */}
                <div className="carte-front">
                    <img src={`/images/${image}`} alt="Card front" />
                </div>
                {/* Back side of the card */}
                <div className="carte-back">
                    <img src="/images/card.jpg" alt="Card back" />
                </div>
            </div>
        </div>
    );
}

export default Card;
