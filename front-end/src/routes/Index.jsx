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
                username: username
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
        <div>
            <h1>This is main page</h1>
            <form onSubmit={submitHandler}>
                <input type="text" value={username} onChange={onChangeUsername} placeholder='Name here' className='border p-5 m-5' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Index