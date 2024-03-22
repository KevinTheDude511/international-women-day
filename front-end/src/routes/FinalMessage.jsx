import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function FinalMessage() {
    const location = useLocation()
    const navigate = useNavigate()
    // const {username, msg1, msg2, gender} = location.state.userdata
    const data = location.state.userdata
    const [userdata, setUserdata] = useState({})

    const onClickNext = () => {
        navigate('/thankyou')
    }

    const onClickPrev = () => {
        setUserdata(data)
    }

    useEffect(() => {
        if (userdata && userdata.username)
        {
            navigate('/msg', {state: {userdata}})
        }
    }, [userdata])

    return (
        <div className='bg-cover min-h-screen flex justify-between' style={{backgroundImage: 'url("page-bg-2.png")'}}>
            <div className='w-[55%] flex flex-col items-end mt-20'>
                <div className='w-[90%] h-auto min-h-[60%] border-4 border-primary rounded-[30px] bg-secondary pt-5 pb-5 pl-10 pr-10 mb-10'>
                    <p className='text-primary text-[55px] font-bold'>
                    Và nhất là 8/3, Quốc tế Phụ nữ, bạn Khương xin chúc các bạn nữ luôn được yêu thương, trân trọng và tỏa sáng rạng ngời luôn nhe
                    </p>
                </div>
                <div className='w-[90%] flex justify-between'>
                    <button onClick={onClickPrev} className='border-4 border-primary rounded-[50px] pt-5 pb-5 pl-16 pr-16 bg-secondary text-[40px] font-montserrat font-bold text-primary hover:bg-buttonHover'>
                        <p className=''>quay lại</p>
                    </button>
                    <button onClick={onClickNext} className='border-4 border-primary rounded-[50px] pt-5 pb-5 pl-16 pr-16 bg-secondary text-[40px] font-montserrat font-bold text-primary hover:bg-buttonHover'>
                        <p className=''>xem tiếp</p>
                    </button>
                </div>
            </div>
            <div className='w-[40%] mt-16'>
                <div className='mb-8'>
                    <img src="/khuong.svg" alt="" className=''/>
                </div>
                <div className='w-[95%]'>
                    <p className='text-right text-secondary text-[35px] font-semibold font-kanit'>From Khương & Nhin with lòvé</p>
                </div>
            </div>
        </div>
    )
}

export default FinalMessage