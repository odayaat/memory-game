import React, { useState, useEffect } from "react";
import Carte from "./Carte";
import "../Csscomposant/Play.css";
import MemoryGame from "./MemoryGame";
import { useNavigate, useLocation } from "react-router-dom";

// Function to shuffle an array using the Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Play() {
    // State variables for game data
    const [cards, setCards] = useState([]);
    const [openCards, setOpenCards] = useState([]);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [moves, setMoves] = useState(0);
    const [startTime, setStartTime] = useState(Date.now());

    const location = useLocation();
    const { name, settings } = location.state;

    // Retrieve scores from localStorage or initialize an empty array if no scores exist
    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    const navigate = useNavigate();

    const rows = settings.row;
    const columns = settings.column;

    // Effect to initialize the cards when the component mounts
    useEffect(() => {
        // Function to select random unique cards
        const getRandomUniqueCards = (n, max) => {
            let available = Array.from(Array(max).keys());
            let selected = [];
            while (selected.length < n) {
                const randomIndex = Math.floor(Math.random() * available.length);
                selected.push(available[randomIndex]);
                available.splice(randomIndex, 1);
            }
            return selected;
        };

        // Select half the total cards because each card needs a match
        let initCards = getRandomUniqueCards((rows * columns) / 2, 16); // 16 is the total unique cards available

        let finalCard = [];
        // Duplicate each selected card
        initCards.forEach(item => {
            finalCard.push(item);
            finalCard.push(item);
        });

        // Shuffle the array with the duplicated cards
        setCards(shuffleArray(finalCard));
        setStartTime(Date.now()); // Initialize start time when the game starts
    }, [rows, columns]); // Re-run this effect when rows or columns change

    // Effect to handle game logic when cards are opened
    useEffect(() => {
        if (openCards.length === 2) {
            const [first, second] = openCards;
            if (cards[first] === cards[second]) {
                setMatchedPairs((prev) => [...prev, cards[first]]);
                if (matchedPairs.length === cards.length / 2 - 1) {
                    const endTime = Date.now();
                    const duration = (endTime - startTime) / 1000; // Duration in seconds
                    const userScore = scores.find((score) => score.name === name);
                    const finalScore = calculateScore(moves, cards.length, duration);

                    if (userScore) {
                        if (userScore.score < finalScore) {
                            userScore.score = finalScore;
                        }
                    } else {
                        scores.push({ name, score: finalScore });
                    }
                    localStorage.setItem("scores", JSON.stringify(scores));

                    navigate("/game-over", {
                        state: {
                            moves,
                            score: finalScore,
                            numCards: cards.length,
                        },
                    });
                }
            }
            setTimeout(() => setOpenCards([]), 1000);
            setMoves(moves + 1);
        }
    }, [openCards, cards]);

    // Handler for card click event
    const handleCardClick = (index, number) => {
        if (!openCards.includes(index)) {
            setOpenCards([...openCards, index]);
        }
    };

    // Function to calculate the score
    const calculateScore = (numMoves, numCards, duration) => {
        const baseScore = numCards * 50; // Base score: 50 points per card
        const movePenalty = numMoves * 5; // Penalty: 5 points per move
        const timePenalty = duration; // Penalty: 1 point per second

        let finalScore = baseScore - movePenalty - timePenalty;
        return finalScore < 0 ? 0 : Math.round(finalScore); // Ensure the score is not negative and round it
    };

    return (
        <div>
            <MemoryGame />
            <div className="text-center my-4 d-flex justify-content-around">
                <p className="text-primary">Moves: {moves}</p>
                <p className="text-primary ms-auto">
                    Score: {calculateScore(moves, cards.length, (Date.now() - startTime) / 1000)}
                </p>
            </div>
            <div
                className="carte-container justify-content-center"
                style={{
                    gridTemplateRows: `repeat(${rows}, 1fr)`,
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                }}
            >
                {cards.map((number, index) => (
                    <Carte
                        image={`${number}.jpg`}
                        key={index}
                        id={index}
                        number={number}
                        isFlipped={
                            openCards.includes(index) || matchedPairs.includes(number)
                        }
                        onCardClick={handleCardClick}
                    />
                ))}
            </div>

            <div className="abandon my-4">
                {/* Button to abandon the game and navigate to game over screen */}
                <button
                    className="btn btn-danger"
                    onClick={() =>
                        navigate("/game-over", {
                            state: { moves, score: 0, numCards: cards.length },
                        })
                    }
                >
                    Abandon
                </button>
            </div>
        </div>
    );
}

export default Play;
