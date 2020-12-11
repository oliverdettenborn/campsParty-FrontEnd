import React, { useContext, useState } from "react";
import FormContext from "../../context/FormContext";

import { Container } from "./AccommodationFormStyle";
import { PageTwoColumn, RightBlackBox, MenuParticipant } from '../../components';
import HotelItem from './HotelItem';

export default function AccomodationChoosing() {
    const { loading, hotelsList} = useContext(FormContext);
    const [ togleMenu, setTogleMenu ] = useState(false);

    return (
        <PageTwoColumn>
            <MenuParticipant setTogleMenu={setTogleMenu} togleMenu={togleMenu}/>
            <RightBlackBox onClick={() => setTogleMenu(false)}>
            <Container>
                <div>
                    <h2>Onde você gostaria de se hospedar?</h2>
                </div>

                <ul>
                    {loading ? 'Carregando...' : hotelsList.map(h => <HotelItem key={h.id} hotel={h} />)}
                </ul>
            </Container>
            </RightBlackBox>
        </PageTwoColumn>
    );
}