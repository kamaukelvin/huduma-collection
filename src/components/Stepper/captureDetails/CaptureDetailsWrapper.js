import React,{useState} from 'react'
import Details from './CaptureDetails'

const  CaptureDetailsWrapper = () => {

    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
           <Details
           startDate={startDate}
           setStartDate={setStartDate}
           />
        </div>
    )
}

export default CaptureDetailsWrapper
