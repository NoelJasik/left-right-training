import React from 'react'
import '../css/game.css'


export default function Game() {

    // game state
    const [isRandomStyle, setIsRandomStyle] = React.useState(false);
    const [isGameStarted, setIsGameStarted] = React.useState(true);
    const [isRoundFinished, setIsRoundFinished] = React.useState(false);
    const [isGameFinished, setIsGameFinished] = React.useState(false);

    // game variables
    const [direction, setDirection] = React.useState('left');
    const [gameCount, setGameCount] = React.useState(10);
    const [roundCount, setRoundCount] = React.useState(0);
    const [reactionTime, setReactionTime] = React.useState([]);
    const [startTime, setStartTime] = React.useState(0);
    const [incorrectGuessCount, setIncorrectGuessCount] = React.useState(0);

    // gameplay functions
    const endRound = () => {

        let list = reactionTime;
        list.push(Date.now() - startTime);
        setReactionTime(list);
        setIsRoundFinished(true);
        setRoundCount(roundCount + 1);
        setStartTime(0);
        if (roundCount >= gameCount) {
            setIsGameFinished(true);
        }

    }

    const convertTime = (time) => {
        let seconds = Math.floor(time / 1000);
        let milliseconds = time - (seconds * 1000);
        return seconds + '.' + milliseconds + 's';
    }

    const averageTime = () => {
        let total = 0;
        for (let i = 0; i < reactionTime.length; i++) {
            total += reactionTime[i];
            console.log(reactionTime[i]);
        }
        return (total / reactionTime.length).toFixed(0);
    }

    // game window

    function GameWindow() {

        function anwser(_input) {
            console.log(_input);
            if (_input == direction) {
                console.log('correct');
                endRound();
            }
            else {
                setIncorrectGuessCount(incorrectGuessCount + 1);
                console.log('incorrect');
            }
        }


        // gameplay
        if (!isGameFinished) {
            if (!isRoundFinished) {
                if (startTime == 0) {
                    setStartTime(Date.now());
                }
                return (
                    <div className='game-window'>
                        <p>{direction}</p>
                        <button onClick={() => anwser('left')}></button>
                        <button onClick={() => anwser('right')}></button>
                    </div>
                )
            }

            if (isRoundFinished) {
                return (
                    <div className='round-end-window'>
                        <p className='game-time'>{convertTime(reactionTime[roundCount - 1])}</p>
                        <p className='game-count'>Round {roundCount} of {gameCount}</p>
                        <button className='game-button' onClick={() => setIsRoundFinished(false)}>Next Round</button>
                    </div>
                )
            }
        } else if(isGameFinished)
        {
            return (
                <div className='round-end-window'>
                        <p className='game-count'>Your average time is:</p>
                        <p className='game-time'>{convertTime(averageTime())}</p>
                        <p className='game-count'>You guessed incorrectly <span style={{"color":(incorrectGuessCount == 0 ? "#AFA" : "#FAA")}}>{incorrectGuessCount}</span> times</p>
                        <button className='game-button' onClick={() => setIsRoundFinished(false)}>Next Game</button>
                    </div>
            )
        }
    }

    return (
        <GameWindow />
    )

}
