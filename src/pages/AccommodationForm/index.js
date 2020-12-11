import React, { useContext, useState } from "react";
import styled from 'styled-components';
import FormContext from "../../context/FormContext";

import { PageTwoColumn, RightBlackBox, MenuParticipant, HotelItem } from '../../components';

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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Chelsea Market', cursive;
    color: #EFEFEF;
    padding: 30px;

    & > div {
        border-bottom: 1px solid white;
        padding-bottom: 15px;
        width: 100%;
        font-size: 32px;
        margin-bottom: 35px;
    }

    ul {
        flex-grow: 1;
        text-align: center;
    }
    h2{
        text-align: center;
    }
`;