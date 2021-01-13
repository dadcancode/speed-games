import React, { useEffect, useState, useRef } from 'react';
import './Timer.css';

const Timer = (props) => {

    const [secs, setSecs] = useState("00");
    const [mins, setMins] = useState("00");
    const [startTime, setStartTime] = useState();

    const lastInterval = useRef();

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

    // useEffect(() => {
    //     if (lastInterval.current) clearInterval(lastInterval.current);

    //     if (props.gameStart === 'start') {
    //         lastInterval.current = setInterval(trackTime, 1000);
    //     } 
    // }, [props.gameStart]);

    useEffect(() => {
        if(startTime && props.gameStart === 'start') {
            lastInterval.current = setInterval(trackTime, 1000);
            console.log(lastInterval.current)
        } else if (props.gameStart === 'endRound') {
            console.log('else ifff')
            let finalS = secs;
            let finalM = mins;
            props.setFinishTime(`${finalM}:${finalS}`);
            clearInterval(lastInterval.current);
        }
    }, [startTime, props.gameStart]);

    return (
        <div className='col-10 d-flex justify-content-end bg-danger card-body timerCol'>
            <span className='timeValue'>{mins}</span>:<span className='timeValue'>{secs}</span>
        </div>
    )
}

export default Timer;