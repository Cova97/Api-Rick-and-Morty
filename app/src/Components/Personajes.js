import React from "react";
import axios from "axios";

const Personajes = () => {
    const peticion = axios.get("https://rickandmortyapi.com/api/character");
    console.log(peticion);

    return (
        <>
            ["Rick", "Morty"]
        </>
    );
};

export default Personajes;