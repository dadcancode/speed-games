import { navigate } from 'hookrouter';
import './ReportCard.css';

const ReportCard = (props) => {

    return (
        <div className='col-10 reportCardCol mt-2'>
            <div className='card h-100'>
                <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                    <div className='h-25 w-100 bg-success d-flex justify-content-center align-items-center'>
                        <p className='cardTitle card-title'>Great Job!</p>
                    </div>
                    <div className='card-body bg-warning w-100 d-flex flex-column align-items-center pt-5'>
                        <p className='card-text mb-4'>You finished in:</p>
                        <p className='card-text display-4'>{props.finishTime}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReportCard;