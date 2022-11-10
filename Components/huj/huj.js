import React, { useState } from "react";
const API = "http://localhost:3000";

export default function AddCar({ addCarToList }) {
    const [newCar, setNewCar] = useState([{
        name: "",
        brand: "",
        engine: {
            type: "",
            hp: ""
    }}]);

    const carHandler = (e) => {
        setNewCar((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
    }


    const addCarBtn = (e) => {
        e.preventDefault();

        console.log(newCar);

        fetch(`${API}/cars`, {
            method: "POST",
            body: JSON.stringify(newCar),
            headers: {
                "Content-Type": "application/json"
            }

        })
            .then(response => response.json())
            .then(newCar => {
                console.log(newCar);
                addCarToList(newCar)
            })
            .catch(error => {
                console.log(error);
            });

    }


    return (

        <form style={{display: "flex", flexDirection: "column", maxWidth: "200px" }} onSubmit={addCarBtn}>
            <label id="name">Nazwa</label>
            <input type="text" id="name" onChange={carHandler}/>

            <label id="brand">Marka</label>
            <input type="text" id="brand" onChange={carHandler}/>

            <h6 style={{margin: "10px 0 0 0"}}>Silnik</h6>
            <label id="type">Typ</label>
            <input type="text" id="type" onChange={e => setNewCar(prev => ({ ...prev, engine: {type: e.target.value}}))}/>

            <label id="hp">Moc</label>
            <input type="text" id="hp" onChange={e => setNewCar(prev => ({ ...prev, engine: { ...prev.engine, hp: e.target.value}}))}/>

            <button>Dodaj samochód</button>
        </form>

    );

}

