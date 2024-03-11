import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Index() {
    const [username, setUsername] = useState('')
    const [userdata, setUserData] = useState({})
    const navigate = useNavigate()

    const onChangeUsername = (e) => {
        e.preventDefault()
        setUsername(e.target.value)
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            if (username === '') {
                throw new Error('Name cannot be empty')
            }
            const url = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL
            const req = {
                username: username.trim().replace(/\s+/g, ' ')
            }
            const response = await axios.get(url, {
                params: req
            })
            const { data, msg } = response.data
            if (response.status === 200) {
                if (msg) {
                    // alert('PUSH TO NO MAN\'S LAND')
                    navigate('/notfound')
                }
                else {
                    // DOES NOT WORK DUE TO THE NATURE OF ASYNCHRONIZATION OF useState
                    setUserData(data) 
                    // alert(userdata.gender)
                    // navigate('/msg', {state: {userdata}})

                    // Solution: need to have useEffect
                }
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        if (userdata && userdata.username)
        {
            if(userdata.gender === true)
            {
                navigate('/notyourday')
            }
            else
            {
                navigate('/msg', {state: {userdata}})
            }
        }
    }, [userdata])

    return (
        <div className='bg-cover min-h-screen flex' style={{backgroundImage: 'url("page-bg-1.png")'}}>
            <div className='w-[45%] mt-10'>
                <img src="/khuong.svg" alt="" className=''/>
            </div>
            <div className='w-[55%] inline'>
                <div className='w-[95%] mb-20'>
                    <p className='text-right text-[100px] font-montserrat font-extrabold text-primary'>International <br /> Women's Day</p>
                </div>
                <div className='w-[90%] mb-32'>
                    <div className='border-t-4 border-l-4 border-r-4 border-black text-center p-5'>
                        <p className='text-[25px] font-merriweather'>NHẬP VÀO HỌ TÊN CỦA BẠN <b>(CÓ DẤU)</b> ĐỂ NHẬN BẤT NGỜ NHA</p>
                    </div>
                    <div>
                        <form onSubmit={submitHandler}>
                            <div className='border-4 border-black mb-10'>
                                    <input type="text" value={username} onChange={onChangeUsername} placeholder='Ở đây nè...' className='w-[100%] p-7 focus:outline-none text-[40px] font-merriweather' />
                            </div>
                            <div className='flex justify-end'>
                                <button type='submit' className='border-4 border-black rounded-[50px] p-5 bg-secondary hover:bg-buttonHover'>
                                    <p className='text-[40px] font-montserrat font-extrabold text-primary'>START NOW!</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-[95%]'>
                    <p className='text-right text-secondary text-[35px] font-semibold font-kanit'>From Khương & Nhin with lòvé</p>
                </div>
            </div>
            {/* <h1 className='text-red-500'>This is main page</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={username} onChange={onChangeUsername} placeholder='Name here' className='border p-5 m-5' />
                <button type='submit'>Submit</button>
            </form> */}
        </div>
    )
}

export default Index