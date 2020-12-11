import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Container } from "./AccommodationFormStyle";
import HotelItem from './HotelItem';
import UserContext from "../../context/UserContext";

export default function AccomodationChoosing() {
    const [hotelsList, serHotelsList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(UserContext);

    useEffect(() => {
        const headers = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }

        axios
            .get(`${process.env.REACT_APP_API_URL}/api/partners/hotels`)
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