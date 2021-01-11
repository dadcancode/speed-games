import { navigate } from 'hookrouter';
import './StartModal.css';

const StartModal = (props) => {
    return (
        <div className={`row bg-dark h-100 startModalRow ${props.gameStart === 'over' ? null : 'd-none'}`}>
            <div className='col-12 d-flex justify-content-center align-items-center startModalCol'>
                <div className='card startModalCard'>
                    <div className='card-body text-center'>
                        <h5 className='card-title'>Start Game?</h5>
                        <div className='card-body'>
                            <div className='buttonDiv d-flex justify-content-between w-100'>
                                <div className='btn btn-success startModalBtn' onClick={() => {
                                    props.setGameStart('start');
                                }}>Go!</div>
                                <div className='btn btn-danger startModalBtn' onClick={() => {
                                    navigate('/')
                                }}>Cancel</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartModal;