import './GameCard.css';

const GameCard = (props) => {
    return (
        <div className='col-10 gameCardCol mt-2'>
            <div className='card h-100'>
                <div className='card-body d-flex justify-content-center align-items-center'>
                    <span className='cardValue'>{props.cardValue}</span>
                </div>
            </div>
        </div>
    )
}

export default GameCard;