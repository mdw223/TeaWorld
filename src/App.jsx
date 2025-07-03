// import { useState } from 'react'
import TeaForm from './components/TeaForm'
import React from 'react'
import './App.css'
import teaIcon from './assets/green-tea_2405525.png'

function App() {

  return (
    <>
      <div className="title-container">
        <div className='title-logo'>
          <img src={teaIcon} alt="tea" />
          <h1 className='title'>TeaWorld</h1>
        </div>
        <p>Let's test if you can make tea!</p>
      </div>
      <TeaForm/>
    </>
  )
}

export default App
