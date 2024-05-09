import React from "react";
// import  ReactDOM  from "react-dom/client";

export default function Body(props) {
    return (
        <>

            <div class="cards">
                <img src={`../images/${props.image}`} class="image" />
                <h4 class="location">{props.location}</h4>
                <p class="google-maps">View on Google Maps</p>
                <h2 class="place">{props.place}</h2>
                <p class="date">{props.date}</p>
                <p class="description">{props.description}</p>
            </div>

        </>
    )
}