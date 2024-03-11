import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Message() {
    const location = useLocation()
    const navigate = useNavigate()
    const data = location.state.userdata
    const [userdata, setUserdata] = useState({})
    const [currentState, setCurrentState] = useState(1)

    // Lê Thảo Nhiên

    const onClickNext = () => {
        setCurrentState(currentState + 1)
    }

    const onClickPrev = () => {
        setCurrentState(currentState - 1)
    }

    const onClickDone = () => {
        setUserdata(data)
    }

    // const capitalizedAfterWS = (str) => {
    //     return str
    //         .split(/\s+/)
    //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //         .join(' ');
    // }

    useEffect(() => {
        if (userdata && userdata.username)
        {
            navigate('/finalmsg', {state: {userdata}})
        }
    }, [userdata])

    return (
        <div className='bg-cover min-h-screen flex justify-between' style={{backgroundImage: 'url("page-bg-2.png")'}}>
            <div className='w-[55%] flex flex-col items-end mt-20'>
                <div className='w-[90%] h-auto min-h-[60%] border-4 border-primary rounded-[30px] bg-secondary pt-5 pb-5 pl-10 pr-10 mb-10'>
                    <p className='text-primary text-[65px] font-bold'>
                        {currentState <= 1 ? data.msg1 : data.msg2}
                    </p>
                </div>
                {/* STATE 1 */}
                {currentState <= 1 && 
                <div className='w-[90%] flex justify-end'>
                    <button onClick={onClickNext} className='border-4 border-primary rounded-[50px] pt-5 pb-5 pl-16 pr-16 bg-secondary text-[40px] font-montserrat font-bold text-primary hover:bg-buttonHover'>
                        <p className=''>xem tiếp</p>
                    </button>
                </div>
                }
                {/* STATE 2 */}
                {currentState >= 2 && 
                <div className='w-[90%] flex justify-between'>
                    <button onClick={onClickPrev} className='border-4 border-primary rounded-[50px] pt-5 pb-5 pl-16 pr-16 bg-secondary text-[40px] font-montserrat font-bold text-primary hover:bg-buttonHover'>
                        <p className=''>quay lại</p>
                    </button>
                    <button onClick={onClickDone} className='border-4 border-primary rounded-[50px] pt-5 pb-5 pl-16 pr-16 bg-secondary text-[40px] font-montserrat font-bold text-primary hover:bg-buttonHover'>
                        <p className=''>xem tiếp</p>
                    </button>
                </div>
                }
            </div>
            <div className='w-[40%] mt-16'>
                <div className='mb-8'>
                    <img src="/nhien.svg" alt="" className=''/>
                </div>
                <div className='w-[95%]'>
                    <p className='text-right text-secondary text-[35px] font-semibold font-kanit'>From Khương & Nhin with lòvé</p>
                </div>
            </div>
        </div>
    )
}

export default Message