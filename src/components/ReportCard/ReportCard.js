import { navigate } from 'hookrouter';
import './ReportCard.css';

const ReportCard = (props) => {

    return (
        <div className='col-10 reportCardCol mt-2'>
            <div className='card h-100'>
                <div className='card-body d-flex justify-content-center align-items-center'>
                    <p className='cardTitle'>Great Job!</p>
                    <div className='card-body'>
                        <p className='card-text'>{`You finished in ${props.finishTime}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportCard;