import React from 'react'
import ReactDOM from 'react-dom'
import { counterSteps as steps } from './config'
import StepCounter from './components/StepCounter/StepCounter'
import './index.css'


ReactDOM.render(
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">React Step Component Test</h1>
    </header>
    <StepCounter steps={steps} activeStep='0' />
  </div>
, document.getElementById('root'))
