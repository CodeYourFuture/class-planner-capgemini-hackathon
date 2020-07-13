import React from "react";

const LeadDeatails = (props) => {
    {console.log(props.result)}
    return(
        <div>
            <h2>Lead</h2>
            {props.result.map((element, index) => {
              return(
                <div key={index}>
                    <p>{element.fullName} ({element.role})</p>
                </div>
                    )  
                })
            }
    <p></p>
        </div>
    )
}

export default LeadDeatails
