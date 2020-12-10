import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./AccommodationFormStyle";
import HotelItem from './HotelItem';

export default function AccomodationChoosing() {
    const [hotelsList, serHotelsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:4000/partners/hotels') // colocar headers de autorização
            .then(r => {
                serHotelsList(r.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.response);
            });
    }, []);

    return (
        <Container>
            <div>
                <h2>Onde você gostaria de se hospedar?</h2>
            </div>

            <ul>
                {loading ? 'Carregando...' : hotelsList.map(h => <HotelItem key={h.id} hotel={h} />)}
            </ul>
        </Container>
    );
}