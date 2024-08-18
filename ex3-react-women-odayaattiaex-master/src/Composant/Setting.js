import { useEffect, useState } from "react";

function Setting({ onSettingChange }) {
    // State variables for column, row, errors, and delay
    const [column, setColumn] = useState(4);
    const [row, setRow] = useState(4);
    const [columnError, setColumnError] = useState("");
    const [rowError, setRowError] = useState("");
    const [delay, setDelay] = useState(0.5);

    // Handler for changing column value
    const onColumnChange = (newColumn) => {
        const col = parseInt(newColumn);
        // Validate that the total number of cards (rows * columns) is even
        if ((col * row) % 2 === 0) {
            setColumnError("");
        } else {
            setColumnError("Please enter an even number.");
        }
        setColumn(col);
        // Call the parent's setting change handler with updated values
        onSettingChange({ row, column: col, delay });
    };

    // Handler for changing row value
    const onRowChange = (newRow) => {
        const ro = parseInt(newRow);
        // Validate that the total number of cards (rows * columns) is even
        if ((ro * column) % 2 === 0) {
            setRowError("");
        } else {
            setRowError("Please enter an even number.");
        }
        setRow(ro);
        // Call the parent's setting change handler with updated values
        onSettingChange({ row: ro, column, delay });
    };

    // Handler for changing delay value
    const onDelayChange = (newDelay) => {
        const del = parseFloat(newDelay);
        setDelay(del);
        // Call the parent's setting change handler with updated values
        onSettingChange({ row, column, delay: del });
    };

    return (
        <div className="mt-4 mb-4 d-flex flex-column">
            <div className="d-flex mb-4">
                {/* Dropdown for selecting the number of rows */}
                <div className="d-flex flex-column me-4 w-50">
                    <label>Number of Rows</label>
                    <select
                        className="form-control"
                        value={row}
                        onChange={(e) => onRowChange(e.target.value)}
                    >
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    {rowError && <p className="text-danger">{rowError}</p>}
                </div>
                {/* Dropdown for selecting the number of columns */}
                <div className="d-flex flex-column w-50">
                    <label>Number of Columns</label>
                    <select
                        className="form-control"
                        value={column}
                        onChange={(e) => onColumnChange(e.target.value)}
                    >
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    {columnError && <p className="text-danger">{columnError}</p>}
                </div>
            </div>
            {/* Dropdown for selecting the delay */}
            <label>Delay</label>
            <select
                className="form-control"
                value={delay}
                onChange={(e) => onDelayChange(e.target.value)}
            >
                <option value={0.5}>0.5</option>
                <option value={1}>1</option>
                <option value={1.5}>1.5</option>
                <option value={2}>2</option>
            </select>
        </div>
    );
}

export default Setting;
