import React, { useEffect, useState } from "react";
import MemoryGame from "./MemoryGame";
import Setting from "./Setting";
import Score from "./Score";
import { Link, useNavigate } from "react-router-dom";

function Acceuil() {
    // State for player name
    const [name, setName] = useState("");
    // State for name validation error message
    const [nameError, setNameError] = useState("");
    // State for game settings (rows, columns, delay)
    const [settings, setSettings] = useState({ row: 4, column: 4, delay: 0.5 });
    // State for current view (home or game)
    const [view, setView] = useState("home");
    // State for game start error message
    const [gameStartError, setGameStartError] = useState("");

    // React Router's navigation hook
    const navigate = useNavigate();

    // Handler for name input change
    const handleNameChange = (event) => {
        setName(event.target.value);
        const newName = event.target.value.trim();
        // Validate name length and characters
        if (newName.length > 12) {
            setNameError("The name must not exceed 12 characters.");
        } else if (!newName.match(/^[a-zA-Z0-9]*$/)) {
            setNameError("The name must contain only letters and numbers.");
        } else {
            setNameError("");
            localStorage.setItem("name", newName); // Store name in localStorage
        }
    };

    // Handler to start the game
    const startGame = () => {
        // Check for errors before starting the game
        if (nameError || (settings.columns * settings.rows) % 2 !== 0 || !name) {
            setGameStartError("Please correct errors before starting the game.");
        }
    };

    // Handler for changing the view
    const handleViewChange = (newView) => {
        navigate("/play", { state: { name, settings } }); // Navigate to the game view
    };

    // State to check if the game can be started
    const [canPlay, setCanPlay] = useState(false);

    // Effect to validate if the game can be started
    useEffect(() => {
        console.log(settings.row, settings.column, nameError, name);
        if (
            nameError.length === 0 &&
            (settings.column * settings.row) % 2 === 0 &&
            name
        ) {
            setCanPlay(true); // Game can be played
        } else {
            setCanPlay(false); // Game cannot be played
        }
    }, [settings, nameError, name]);

    return (
        <div className="w-50 mx-auto">
            <MemoryGame />
            <div className="mt-4 mb-4 d-flex flex-column">
                <label>Your Name</label>
                <input
                    placeholder="Please enter your name"
                    className="form-control w-25"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
                *{nameError && <div className="text-danger">{nameError}</div>}
            </div>
            <div>
                <button
                    className={`btn ${canPlay ? "btn-primary" : "btn-light"} me-2`}
                    onClick={() => handleViewChange("play")}
                >
                    Play
                </button>
                <button className="btn btn-primary me-2">Setting</button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#scoreModal"
                >
                    Score
                </button>
            </div>
            <Setting onSettingChange={setSettings} />
            <Score />
        </div>
    );
}

export default Acceuil;
