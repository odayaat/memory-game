import React, { useEffect } from "react";
import MemoryGame from "./MemoryGame";
import { useLocation, useNavigate } from "react-router-dom";

function GameOver() {
    // Access the state passed through the navigation
    const location = useLocation();
    const { moves, score, numCards } = location.state;

    // Retrieve scores from localStorage or initialize an empty array if no scores exist
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    const navigate = useNavigate();

    useEffect(() => {
        // Sort scores in descending order based on score value
        scores.sort((a, b) => b.score - a.score);
    }, []);

    return (
        <div>
            <MemoryGame />
            <h1 className="text-center">Game Over</h1>
            <p className="text-center">Moves: {moves}</p>
            <p className="text-center">Score: {score}</p>
            <p className="text-center">You played {numCards} cards</p>

            <table className="table">
                <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Score</th>
                </tr>
                </thead>
                <tbody>
                {scores.map((score, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{score.name}</td>
                        <td>{score.score}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div className="text-center mt-4">
                {/* Button to navigate back to the home page */}
                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/")}
                >
                    Go to Home
                </button>
            </div>
        </div>
    );
}

export default GameOver;
