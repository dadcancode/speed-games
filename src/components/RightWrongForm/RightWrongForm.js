const RightWrongForm = (props) => {

    return (
        <div className='col-12 rWCol'>
            <div className='row h-100 pb-4'>
                <div className='col-6 h-100'>
                    <div onClick={() => {props.setResult(1)}} className='btn btn-success w-100 h-100 d-flex justify-content-center align-items-center'>Y</div>
                </div>
                <div className ='col-6 h-100'>
                    <div onClick={() => {props.setResult(2)}} className='btn btn-danger w-100 h-100 d-flex justify-content-center align-items-center'>N</div>
                </div>
            </div>
        </div>
    )
}

export default RightWrongForm;