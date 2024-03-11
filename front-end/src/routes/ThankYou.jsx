import React from 'react'
import { useNavigate } from 'react-router-dom'

function ThankYou() {
    const navigate = useNavigate()

    const onClickHome = () => {
        navigate('/')
    }

    const onClickSpecialNote = () => {
        navigate('/specialnote')
    }

    return (
        <div className='bg-cover min-h-screen bg-fixed' style={{backgroundImage: 'url("page-bg-1.png")'}}>
            <div className='flex justify-center pt-10 h-[450px] mb-5'>
                <div className='w-[80%] border-4 border-primary rounded-[50px] bg-third pt-10 pl-20 pr-20 font-merriweather text-[70px] text-primary font-bold'>
                    <p>Thank you :3</p>
                    <p>Design: Lê Thảo Nhiên</p>
                    <p>Code: Đỗ Duy Khương</p>
                </div>
            </div>
            <div className='flex justify-evenly mb-2'>
                <div className='w-[25%]'>
                    <div className='ml-10'>
                        <p className='font-kanit text-[20px] text-primary'>đây là Khương</p>
                    </div>
                    <div className='flex justify-end'>
                        <img src="/khuong.svg" alt="" className='w-[80%]'/>
                    </div>
                </div>
                <div className='w-[20%]'>
                    <button onClick={onClickHome} className='w-full border-2 border-primary rounded-[50px] bg-secondary p-5 hover:bg-buttonHover'>
                        <p className='text-primary text-[30px] text-center font-semibold'>quay lại trang chủ</p>
                    </button>
                </div>
                <div className='w-[20%]'>
                    <button onClick={onClickSpecialNote} className='w-full border-2 border-primary rounded-[50px] bg-secondary p-5 hover:bg-buttonHover'>
                        <p className='text-primary text-[30px] text-center font-semibold'>the story behind</p>
                    </button>
                </div>
                <div className='w-[25%]'>
                    <div className='flex justify-end mr-16'>
                        <p className='font-kanit text-[20px] text-primary'>đây là Nhiên</p>
                    </div>
                    <div>
                        <img src="/nhien.svg" alt="" className='w-[80%]'/>
                    </div>
                </div>
            </div>
            <div className='w-[98%]'>
                <p className='text-right text-secondary text-[35px] font-semibold font-kanit'>From Khương & Nhin with lòvé</p>
            </div>
        </div>
    )
}

export default ThankYou