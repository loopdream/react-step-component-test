import React from 'react'
import './StepCounter.css'


const StepCounterItem = ({ index, step, isActive, onStepClick }) => {

  return (
    <li className={`StepCounterItem ${isActive ? 'is-active' : ''}`}>
      <span className="StepCounterItem__label">{step}</span>
      <span onClick={() => onStepClick(index)} className="StepCounterItem__bullet"></span>
    </li>
  )
  
}

 
export default StepCounterItem