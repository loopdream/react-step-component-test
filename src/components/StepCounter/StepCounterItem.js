import React from 'react'
import './StepCounter.css'


const StepCounterItem = ({ index, step, activeStep, onStepClick }) => {

  return (
    <li className={`StepCounterItem ${index <= activeStep ? 'is-active' : ''}`}>
      <span className="StepCounterItem__label">{step}</span>
      <span onClick={() => onStepClick(index)} className="StepCounterItem__bullet"></span>
    </li>
  )
  
}

 
export default StepCounterItem