import React, { useState } from "react";
const EditDeleteClass = (props) => {
    const reqBody = {
        id: props.id,
        start: props.start,
        end: props.end,
        type: props.type,
    };
    const handleUpdate = (number, id) => {
        const body = JSON.stringify(reqBody);
        fetch(`http://localhost:22666/week/${number}/class/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        })
            .then((res) => res.json())
            .then();
    };
    return (
        <form className="form-datetime">
            <h3>Class Type Finder</h3>
            <div className="start-time">
                <div>
                    <label>Start Time:</label>
                </div>
                <div>
                    <input
                        onChange={(event) => {
                            props.setStart(event.target.value);
                            reqBody.start = event.target.value;
                        }}
                        type="search"
                        value={props.start}
                    />
                </div>
            </div>
            <div className="finish-time">
                <div>
                    <label>Finish Time:</label>
                </div>
                <div>
                    <input
                        onChange={(event) => {
                            props.setEnd(event.target.value);
                            reqBody.end = event.target.value;
                        }}
                        type="search"
                        value={props.end}
                    />
                </div>
            </div>
            <div className="class-type">
                <div>
                    <label>Class Type:</label>
                </div>
                <div>
                    <input
                        onChange={(event) => {
                            props.setType(event.target.value);
                            reqBody.type = event.target.value;
                        }}
                        type="search"
                        value={props.type}
                    />
                </div>
            </div>
            <div className="date-time-btn">
                <button
                    className="btn-date-time"
                    type="submit"
                    onClick={() => handleUpdate(props.week.week, props.id)}
                >
                    update
        </button>
            </div>
        </form>
    );
};
export default EditDeleteClass;