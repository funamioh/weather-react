import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}℃`)
    }

    let apiKey = `730afeb398d3874cb3c0cb8d98df8b85`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
        );
}
