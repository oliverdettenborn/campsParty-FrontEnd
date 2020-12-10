import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import FormContext from '../../context/FormContext';
import { Container, Date, MomentsContainer, modalStyle, ModalContainer } from './ActivitiesFormStyle';

export default function ActivitiesOfTheDay({ day, countOneChoice }) {
    const [availableActivities, setAvailableActivities] = useState([]);
    const { chosenActivities, setChosenActivities } = useContext(FormContext);
    const [chosenMomentEvents, setChosenMomentEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    let eventDay;

    Modal.setAppElement('#root');

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/event/activities/${day}`) // colocar headers
            .then(r => {
                setAvailableActivities(r.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [day]);

    switch(day) {
        case 'friday':
            eventDay = 'Dia 01 - Sexta - 22/01/2021';
            break;
        case 'saturday':
            eventDay = 'Dia 02 - Sábado - 23/01/2021';
            break;
        case 'sunday':
            eventDay = 'Dia 03 - Domingo - 24/01/2021';
            break;
        default:
            break
    }

    const openModal = chosenHourOfDay => {
        if (loading) return;

        setChosenMomentEvents(availableActivities.filter(a => a.hourOfTheDay.toLowerCase() === chosenHourOfDay));
        setIsModalOpen(true);
    };

    const chooseActivity = (activityDescription, hourOfTheDay) => {
        chosenActivities[day][hourOfTheDay] = activityDescription;

        countOneChoice();

        setChosenActivities({...chosenActivities});
        setIsModalOpen(false);
    }

    return (
        <Container>
            <Date>{eventDay}</Date>
            <MomentsContainer>
                {loading && 'Carregando...'}

                <div>
                    <div>Manhã</div>
                    <div onClick={() => openModal('morning')}>
                        {
                            chosenActivities[day].morning
                                ? chosenActivities[day].morning
                                : 'Clique para adicionar atividade'
                        }
                    </div>
                </div>

                <div>
                    <div>Tarde</div>
                    <div onClick={() => openModal('afternoon')}>
                        {
                            chosenActivities[day].afternoon
                                ? chosenActivities[day].afternoon
                                : 'Clique para adicionar atividade'
                        }
                    </div>
                </div>

                <div>
                    <div>Noite</div>
                    <div onClick={() => openModal('night')}>
                        {
                            chosenActivities[day].night
                                ? chosenActivities[day].night
                                : 'Clique para adicionar atividade'
                        }
                    </div>
                </div>

                <Modal style={modalStyle} isOpen={isModalOpen}>
                    <ModalContainer>
                        {
                            chosenMomentEvents.map(m => {
                                return (
                                    <div
                                        key={m.id}
                                        onClick={() => chooseActivity(m.description, m.hourOfTheDay.toLowerCase())}
                                    >
                                        {m.description}
                                    </div>
                                );
                            })
                        }
                    </ModalContainer>
                </Modal>
            </MomentsContainer>
        </Container>
    );
}