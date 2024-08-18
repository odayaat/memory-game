import "./App.css";
import Acceuil from "./Composant/Acceuil";
import Play from "./Composant/Play";
import Score from "./Composant/Score";
import GameOver from "./Composant/GameOver";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
} from "react-router-dom";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/score" element={<Score />}></Route>
                <Route path="/play" element={<Play />}></Route>
                <Route path="/" element={<Acceuil />}></Route>
                <Route path="/game-over" element={<GameOver />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
