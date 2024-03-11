import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate()

    const onClickPrev = () => {
        navigate('/thankyou')
    }

    const onClickHome = () => {
        navigate('/')
    }

    return (
        <div className='bg-cover min-h-screen flex flex-col justify-center items-center' style={{backgroundImage: 'url("page-bg-2.png")'}}>
            <div className='mb-10 w-[60%] h-auto border-2 border-primary'>
                <img src="/specialNote.jpg" alt=""/>
            </div>
            <div className='flex w-[60%] justify-between'>
                <div className='w-[20%]'>
                    <button onClick={onClickPrev} className='w-full border-2 border-primary rounded-[50px] bg-secondary p-5 hover:bg-buttonHover'>
                        <p className='text-primary text-[30px] text-center font-semibold'>quay lại</p>
                    </button>
                </div>
                <div className='w-[35%]'>
                    <button onClick={onClickHome} className='w-full border-2 border-primary rounded-[50px] bg-secondary p-5 hover:bg-buttonHover'>
                        <p className='text-primary text-[30px] text-center font-semibold'>quay lại trang chủ</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Error