import React, { useEffect, useState } from 'react';
import './Timer.css';

const Timer = (props) => {

    const [secs, setSecs] = useState("00");
    const [mins, setMins] = useState("00");
    const [startTime, setStartTime] = useState();

    const startClock = () => {
        setInterval(trackTime, 1000);
    }

    const updateSecs = () => {
        let secondTime = Math.floor(((Date.now() - startTime) / 1000) % 60);
        if (secondTime < 10) {
            secondTime = "0" + secondTime;
        }
        setSecs(secondTime);
    }

    const updateMinutes = () => {
        let minTime = Math.floor(((Date.now() - startTime) / 60000) % 60);
        if(minTime < 10) {
            minTime = "0" + minTime;
        }
        setMins(minTime);
    }

    const trackTime = () => {
        updateSecs();
        updateMinutes();
    }

    useEffect(() => {
        if(props.gameStart === 'start') {
            setStartTime(Date.now());
        }
        if(props.gameStart === 'endRound') {
            setStartTime(null);
        }
    }, [props.gameStart]);

    useEffect(() => {
        let tickity;
        if(startTime) {
            tickity = setInterval(trackTime, 1000);
        } else if (props.gameStart === 'endRound') {
            let finalS = secs;
            let finalM = mins;
            props.setFinishTime(`${finalM}:${finalS}`);
            clearInterval(tickity);
            console.log(tickity);
        }
    }, [startTime, props.gameStart]);

    return (
        <div className='col-10 d-flex justify-content-end bg-danger card-body timerCol'>
            <span className='timeValue'>{mins}</span>:<span className='timeValue'>{secs}</span>
        </div>
    )
}

export default Timer;