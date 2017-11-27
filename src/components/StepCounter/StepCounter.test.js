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
  
  test('the state changes when item clicked', () => {
    const initialState = 0
    const wrapper = mount(<StepCounter steps={counterSteps} activeStep={initialState} />)
    const step2 = wrapper.find('.StepCounterItem__bullet').at(1)
    step2.simulate('click')
    expect(wrapper.state('activeStep')).toBe(initialState+1)
  })

  test('the state shouldnt change if a clicked step isnt an immediate sibling', () => {
    const counterSteps = ['item1', 'item2', 'item3', 'item4', 'item5'] // set up 5 steps
    const initialState = 2 // initial active state to be third step
    const wrapper = mount(<StepCounter steps={counterSteps} activeStep={initialState} />)
    const step1 = wrapper.find('.StepCounterItem__bullet').at(0)  
    const step5 = wrapper.find('.StepCounterItem__bullet').at(4)  
    // step 1 and step 5 shouldnt affect the state if clicked, as only immedtate siblings can change state
    step1.simulate('click')
    expect(wrapper.state('activeStep')).toBe(initialState)
    step5.simulate('click')
    expect(wrapper.state('activeStep')).toBe(initialState)
  })
 
})
