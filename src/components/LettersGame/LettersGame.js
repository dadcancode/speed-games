import React, { useState, useEffect } from 'react';
import GameCard from '../GameCard/GameCard';
import { shuffleLetters } from './LettersGameLogic';
import RightWrongForm from '../RightWrongForm/RightWrongForm';
import './LettersGame.css';
import Timer from '../Timer/Timer';
import StartModal from '../StartModal/StartModal';
import ReportCard from '../ReportCard/ReportCard';


const LettersGame = () => {

    const [lettersList, setLettersList] = useState(['A']);
    const [result, setResult] = useState(0);
    const [currentCard, setCurrentCard] = useState();
    const [gameStart, setGameStart] = useState('over');
    const [letters, setLetters] = useState(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']);
    const [finishTime, setFinishTime] = useState(null);

    

    useEffect(() => {
        const abc = letters;
        console.log('gameStart useEffect ran');
        console.log(abc);
        const alpha = shuffleLetters(abc);
        console.log(alpha);
        setLettersList(alpha)
    }, []);

    useEffect(() => {
        console.log('lettersList useEffect')
        if(lettersList.length) {
            setCurrentCard(lettersList[0]);
        }
        console.log('shoop')
    }, [lettersList]);

    useEffect(() => {
        if(!lettersList.length) {
            setGameStart('endRound');
        }
    }, [lettersList.length]);

    useEffect(() => {
        if(result === 1) {
            let temp = lettersList;
            temp.shift();
            setResult(0);
            setLettersList(temp);
            setCurrentCard(temp[0]);
        } else if (result === 2) {
            let temp = lettersList;
            let wrongAnswer = temp.shift();
            temp.push(wrongAnswer);
            setResult(0);
            setLettersList(temp);
            setCurrentCard(temp[0]);
        }
    }, [result]);



    return (
        <div className='row bg-info justify-content-center letterGameRow'>
            <StartModal setGameStart={setGameStart} gameStart={gameStart} />
            <Timer gameStart={gameStart} setFinishTime={setFinishTime}/>
            {gameStart !== 'endRound' ? <GameCard cardValue={currentCard}/> : <ReportCard finishTime={finishTime} />}
            <RightWrongForm result={result} setResult={setResult}/>
            
        </div>
    )
}

export default LettersGame;