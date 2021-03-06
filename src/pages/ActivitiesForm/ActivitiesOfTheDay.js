import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

import FormContext from '../../context/FormContext';
import UserContext from '../../context/UserContext';
import { Container, Date, MomentsContainer, modalStyle, ModalContainer, ActivityBox } from './ActivitiesFormStyle';

export default function ActivitiesOfTheDay({ day }) {
    const { user } = useContext(UserContext);
    const [availableActivities, setAvailableActivities] = useState([]);
    const [chosenMomentEvents, setChosenMomentEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const { chosenActivities, setChosenActivities } = useContext(FormContext);
    let eventDay;

    Modal.setAppElement('#root');

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/event/activities/${day}`,
                { headers: {"Authorization": `Bearer ${user.token}`}})
            .then(r => {
                setAvailableActivities(r.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, [day, user.token]);

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

    const chooseActivity = (activityDescription, hourOfTheDay, isConnectedActivity) => {
        const connectedActivities = availableActivities.map(a =>  (a.isConnected) && a.description);
    
        if (isConnectedActivity) {
            chosenActivities[day].morning = activityDescription;
            chosenActivities[day].afternoon = activityDescription;
            chosenActivities[day].night = activityDescription;
        }
        else {
            if (connectedActivities.includes(chosenActivities[day][hourOfTheDay])) {
                chosenActivities[day].morning = '';
                chosenActivities[day].afternoon = '';
                chosenActivities[day].night = '';
            }

            chosenActivities[day][hourOfTheDay] = activityDescription;
        }

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
                            chosenMomentEvents.map(e => {
                                return (
                                    <>
                                        <ActivityBox
                                            isConnected={e.isConnected}
                                            key={e.id}
                                            onClick={() => chooseActivity(e.description, e.hourOfTheDay.toLowerCase(), e.isConnected)}
                                        >
                                            {e.description}
                                        </ActivityBox>
                                    </>
                                );
                            })
                        }
                        <span>
                            Atividades destacadas em amarelo duram todo o dia. Logo
                            todos os campos "Manhã", "Tarde" e "Noite" serão 
                            preenchidos automaticamente caso sejam escolhidas.
                        </span>
                    </ModalContainer>
                </Modal>
            </MomentsContainer>
        </Container>
    );
}