function Score() {
    // Retrieve scores from localStorage or initialize an empty array if no scores exist
    const scores = JSON.parse(localStorage.getItem("scores")) || [];
    // Sort scores in descending order based on score value
    scores.sort((a, b) => b.score - a.score);

    return (
        <div>
            {/* Modal for displaying the leaderboard */}
            <div
                className="modal fade"
                id="scoreModal"
                tabindex="-1"
                aria-labelledby="High Scores"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* Modal title */}
                            <h1 className="modal-title fs-5" id="scoreModelLabel">
                                Leaderboard
                            </h1>
                            {/* Button to close the modal */}
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {/* Table to display scores */}
                            <table className="table">
                                <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Name</th>
                                    <th>Score</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/* Map over the scores array to display each score */}
                                {scores.map((score, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{score.name}</td>
                                        <td>{score.score}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            {/* Button to close the modal */}
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Score;
