import { Route, Routes } from 'react-router-dom'
import Index from './routes/Index'
import Message from './routes/Message'
import NotFound from './routes/NotFound'
import FinalMessage from './routes/FinalMessage'
import ThankYou from './routes/ThankYou'
import NotYourDay from './routes/NotYourDay'
import Error from './routes/Error'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Index></Index>}></Route>
                <Route path='/msg' element={<Message></Message>}></Route>
                <Route path='/notyourday' element={<NotYourDay></NotYourDay>}></Route>
                <Route path='/notfound' element={<NotFound></NotFound>}></Route>
                <Route path='/finalmsg' element={<FinalMessage></FinalMessage>}></Route>
                <Route path='/thankyou' element={<ThankYou></ThankYou>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </>
    )
}

export default App
