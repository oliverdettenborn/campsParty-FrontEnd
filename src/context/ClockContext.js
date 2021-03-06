
import React, { createContext, useState, useEffect } from 'react';

const ClockContext = createContext();

export default ClockContext;

export function ClockProvider(props) {
    const [ days, setDays ] = useState('');
    const [ hours, setHours ] = useState('');
    const [ minutes, setMinutes ] = useState('');
    const [ seconds, setSeconds ] = useState('');
    const [ finish, setFinish ] = useState(false);
    
    useEffect(() => {
        const finalDate = new Date('december 11 2020 18:00:00');
        const updateCountdown = () => {
            const currentTime = new Date();
            const differnce = finalDate - currentTime;
            setDays(Math.floor(differnce / 1000 / 60 / 60 / 24));
            setHours(Math.floor(differnce / 1000 / 60 / 60) % 24);
            setMinutes(Math.floor(differnce / 1000 / 60) % 60);
            setSeconds(Math.floor(differnce / 1000) % 60);
            if(seconds < 0 && minutes < 0 && hours < 0 && days < 0){
                setFinish(true);
            }
        }
        const interval = setInterval(updateCountdown, 1000);

        return () => { clearInterval(interval)}
    }, [days, hours, minutes, seconds])

    let takes;

    if(seconds < 0 && minutes < 0 && hours < 0 && days < 0){
        takes = [
            { time: 0, name: 'D', id: 1 },
            { time: 0, name: 'H', id: 2 },
            { time: 0, name: 'M', id: 3 },
            { time: 0, name: 'S', id: 4 }
        ];
    }else{
        takes = [
            { time: days, name: 'D', id: 1 },
            { time: hours, name: 'H', id: 2 },
            { time: minutes, name: 'M', id: 3 },
            { time: seconds, name: 'S', id: 4 }
        ];
    }

    return (
        <ClockContext.Provider value={{ days, setDays, hours, setHours, minutes, setMinutes, seconds, setSeconds, takes, finish }}>
          {props.children}
        </ClockContext.Provider>
      );
}