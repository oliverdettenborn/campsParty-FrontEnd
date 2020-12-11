import React, { useContext } from "react";
import FormContext from "../../context/FormContext";

import { Container } from "./AccommodationFormStyle";
import HotelItem from './HotelItem';

export default function AccomodationChoosing() {
    const { loading, hotelsList} = useContext(FormContext);

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