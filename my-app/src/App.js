import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'

import './_app.scss'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/watchScreen/watchScreen'
import SearchScreen from './screens/SearchScreen'
import SubscriptionsScreen from './screens/subscriptionsScreen/SubscriptionsScreen'
import ChannelScreen from './screens/channelScreen/ChannelScreen'


const App = () => {

  const [sidebar, toggleSidebar] = useState(false)

  const handleToggleSidebar = () => toggleSidebar(value => !value)

  const { accessToken, loading } = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth')
    }
  }, [accessToken, loading, navigate])

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className='app__container'>
        <Sidebar
          sidebar={sidebar}
          handleToggleSidebar={handleToggleSidebar}
        />
        <Container fluid className='app__main '>
          <Routes>
            <Route path='/' element={<HomeScreen/>}/>
            <Route path='/auth' element={<LoginScreen />} />

            <Route path='/search/:query' element={<SearchScreen />}/>

            <Route path='/watch/:id' element={<WatchScreen />}/>

            <Route path='/feed/subscriptions' element={ <SubscriptionsScreen />}/>

            <Route path='/channel/:channelId' element={<ChannelScreen />} />

          </Routes>
        </Container>
      </div>
    </>


  )
}

export default App