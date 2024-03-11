import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate = useNavigate()

    const onClickHome = () => {
        navigate('/')
    }

    return (
        <div className='min-h-screen bg-secondary flex flex-col justify-center items-center'>
            <div className='mb-10'>
                <img src="/cat.gif" alt="" className='w-[800px] h-[530px]'/>
            </div>
            <div className='mb-10'>
                <p className='font-merriweather text-[50px]'>m là đứa nào đây?</p>
            </div>
            <div className='w-[20%]'>
                <button onClick={onClickHome} className='w-full border-2 border-primary rounded-[50px] bg-secondary p-5 hover:bg-buttonHover'>
                    <p className='text-primary text-[30px] text-center font-semibold'>quay lại trang chủ</p>
                </button>
            </div>
        </div>
    )
}

export default NotFound