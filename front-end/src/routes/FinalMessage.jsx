import React from 'react'
import { useNavigate } from 'react-router-dom'

function FinalMessage() {
    const navigate = useNavigate()
    // const {username, msg1, msg2, gender} = location.state.userdata

    // const onClickPrev = () => {
    //     navigate('/')
    // }

    const onClickNext = () => {
        navigate('/thankyou')
    }

    const onClickMain = () => {
        navigate('/')
    }

    return (
        <div>
            <p>This is the final message</p>
            {/* Send this back lost data */}
            {/* <button onClick={onClickHandler}>Back</button> */}
            <button onClick={onClickNext}>A note for you</button>
            <button onClick={onClickMain}>Back to main</button>
        </div>
    )
}

export default FinalMessage