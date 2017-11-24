import React, { Component } from 'react'
import StepCounterItem from './StepCounterItem'

import './StepCounter.css'


class StepCounter extends Component {

  constructor(props) {

    super(props)

    this.state = {
      activeStep: undefined, // we can set this in componentWillMount
    }
    
  }

  // componentWillMount is part of Component lifecycle and will fire before render
  componentWillMount() {
    let activeStep = this.props.activeStep ? this.props.activeStep : 0 
    this.setState({ activeStep })
    this.steps = this.props.steps ? this.props.steps : [] 
  }

  // You can't jump over a step - 
  // set state with new active step val only if the step is an immediate sibling
  updateStep = step => {
    return (
      step === this.state.activeStep ||
      step >= this.state.activeStep + 2 ||
      step <= this.state.activeStep - 2
    ) ? false : this.setState({ activeStep: step })
  }


  
  render() {

    // Lets check the num of steps before and show error if incorrect num steps
    if (this.steps.length < 2 || this.steps.length > 5) {
      return <h2>There should be a minimum of 2 and a maximum of 5 steps defined!</h2>
    }

    // fuction to map over step items and render StepCounterItem component
    const stepItems = this.steps.map((step, i) => {
      return (
        <StepCounterItem
          onStepClick={selectedStep => this.updateStep(selectedStep)}
          step={step}
          activeStep={this.state.activeStep}
          index={i}
          key={i} />
      )
    })

    // render the StepCounter 
    return (
      <ol className="StepCounter">
        {stepItems}
      </ol>
    )

  }
}

export default StepCounter