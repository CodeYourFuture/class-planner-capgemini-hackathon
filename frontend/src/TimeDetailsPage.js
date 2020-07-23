import React, { useState } from "react";
import EditDeleteClass from "./EditDeleteClass";

const TimeDetailsPage = (props) => {
  const [rowDelete, setRowDelete] = useState(props.week.timeDetails);

  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState("");
  const [findAppear, setFindAppear] = useState(false);

  const deleteUser = (number, id) => {
    fetch(`http://localhost:22666/week/${number}/class/${id}`, {
      method: "DELETE",
    })
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then(setRowDelete(rowDelete.filter((item) => item.id !== id)));
  };

  const editSession = (number, id) => {
    fetch(`http://localhost:22666/week/${number}/class/${id}`)
      .catch((error) => console.log(error))
      .then((res) => res.json())
      .then((data) => {
        setStart(data.start);
        setEnd(data.end);
        setType(data.type);
        setId(data.id);
      });
  };

  function appearanceHandler() {
    setFindAppear(true);
  }

  return (
    <div>
      <table className="table table-striped time-table table-hover">
        <thead>
          <tr>
            <th scope="col">Start Time</th>
            <th scope="col">Finish Time</th>
            <th scope="col">Class Type</th>
            <th scope="col">Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {rowDelete &&
            rowDelete.length > 0 &&
            rowDelete.map((time, index) => {
              const { id, start, end, type } = time;
              return (
                <tr key={index}>
                  <td>{start}</td>
                  <td>{end}</td>
                  <td>{type}</td>
                  <td>
                    <button
                      className="btn btn-info col-9 margin-button"
                      onClick={() => {
                        editSession(props.week.week, id);
                        appearanceHandler();
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger col-9 margin-button"
                      onClick={() => deleteUser(props.week.week, id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* {findAppear ? ( */}
        <EditDeleteClass
          start={start}
          end={end}
          type={type}
          id={id}
          setStart={setStart}
          setEnd={setEnd}
          setType={setType}
          week={props.week}
        />
      {/* ) : null} */}
    </div>
  );
};

export default TimeDetailsPage;
