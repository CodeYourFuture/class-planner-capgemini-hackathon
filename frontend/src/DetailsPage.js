import React from "react";
import weeks from "./weeks.json"
// import LeadDetails from "./LeadDetails"



const DetailsPage = () => {

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            week{weeks[0].week}
                        </th>
                        <th>
                            <ul>
                                <li>{weeks[0].location}</li>
                                <li>{weeks[0].date}</li>
                                <li>{weeks[0].start+"-"+weeks[0].end}</li>
                            </ul>
                        </th>
                    </tr>
                    <tr>
                        <td>Time</td>
                        <td>Class Type</td>
                        <td>Lead</td>
                    </tr>
                </thead>
                <tbody>
                    {weeks[0].timeDetails.map((time, index) => {
                         return(
                            <tr key={index}>
                                <td>{time.start}</td>
                                <td>{time.end}</td>
                                <td>{time.type}</td>
                            </tr>
                            )
                        }) 
                    }
                </tbody>
            </table>
            <button>Add/Edit/Delete Time</button>
            <button>Syllabus</button>
            <button>Home</button>
            {/* <LeadDetails result={weeks[0].peopleDetails} /> */}
        </div>
    )
}

export default DetailsPage;