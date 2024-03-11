import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate()

    const onClickHome = () => {
        navigate('/')
    }

    return (
        <div className='min-h-screen bg-secondary flex flex-col justify-center items-center'>
            <div className='mb-10'>
                <p className='text-[60px] text-primary font-bold font-montserrat'>
                    Error 404: trời đất ơi lỗi rồi làm ơn đừng nghịch nữa
                </p>
            </div>
            <div className='w-[20%]'>
                <button onClick={onClickHome} className='w-full border-2 border-primary rounded-[50px] bg-secondary p-5 hover:bg-buttonHover'>
                    <p className='text-primary text-[30px] text-center font-semibold'>quay lại trang chủ</p>
                </button>
            </div>
        </div>
    )
}

export default Error