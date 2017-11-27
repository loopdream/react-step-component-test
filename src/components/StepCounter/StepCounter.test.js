import React from 'react'
import ReactDOM from 'react-dom'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })


import StepCounter from './StepCounter'
import { counterSteps } from '../../config'
 


describe('<StepCounter />', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<StepCounter steps={counterSteps} activeStep="0" />, div)
  })

  it('renders between 2 and 5 steps', () => {
    const wrapper = mount(<StepCounter steps={counterSteps} activeStep="0" />)
    const numSteps = wrapper.find('.StepCounterItem').length
    expect(numSteps).toBeGreaterThanOrEqual(2)
    expect(numSteps).toBeLessThanOrEqual(5)
  })
  
  test('the state changes only when imediate sibling items are clicked', () => {
    const counterSteps = ['item1', 'item2', 'item3', 'item4', 'item5'] // set up 5 steps
    let initialState = 2 // initial active state to be third step
    const wrapper = mount(<StepCounter steps={counterSteps} activeStep={initialState} />)
    const step1 = wrapper.find('.StepCounterItem__bullet').at(0)
    const step2 = wrapper.find('.StepCounterItem__bullet').at(1)
    const step3 = wrapper.find('.StepCounterItem__bullet').at(2)  
    const step4 = wrapper.find('.StepCounterItem__bullet').at(3)
    const step5 = wrapper.find('.StepCounterItem__bullet').at(4)  
    // Only step 2 and step 4 should affect the state if clicked as only immedtate siblings can change state
    // first test the 1st and 5th steps - they shouldnt change state 
    step1.simulate('click')
    expect(wrapper.state('activeStep')).toBe(initialState)
    step5.simulate('click')
    expect(wrapper.state('activeStep')).toBe(initialState)
    // click the 4th - should change state
    step4.simulate('click')
    expect(wrapper.state('activeStep')).toBe(initialState+1)
    // click the 3th - should change state back
    step3.simulate('click')
    expect(wrapper.state('activeStep')).toBe(initialState)
  })

 
})
