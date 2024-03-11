import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Message() {
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state.userdata
    const [msg, setMsg] = useState(data.msg1)
    
    const [currentState, setCurrentState] = useState(1)

    // Lê Thảo Nhiên

    const onClickNext = () => {
        setCurrentState(currentState + 1)
    }

    const onClickPrev = () => {
        setCurrentState(currentState - 1)
    }

    const onClickDone = () => {
        navigate('/finalmsg')
    }

    const capitalizedAfterWS = (str) => {
        return str
            .split(/\s+/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <div>

            <h1>This is message</h1>
            <p>Chào bạn {capitalizedAfterWS(data.username)}</p>
            <p>{currentState <= 1 ? data.msg1 : data.msg2}</p>
            {currentState <= 1 && <button onClick={onClickNext}>Continue</button>}
            {currentState >= 2 && <button onClick={onClickPrev}>Back</button>}
            {currentState >= 2 && <button onClick={onClickDone}>Continue</button>}
        </div>
    )
}

export default Message