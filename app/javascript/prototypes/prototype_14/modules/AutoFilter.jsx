import React, { Component } from 'react'

import SC_Slider from '../components/SC_Slider.jsx'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'


export default class AutoFilter extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props
    const options = ['sine', 'square', 'sawtooth', 'triangle']


    return (
      <div className="module AutoFilter">
        <div className="heading">
          <h2>AutoFilter</h2>
        </div>
        <div className="modulebase">
          <SC_Slider
            name="Wet"
            min={0}
            max={1}
            step={0.01}
            value={settings.autoFilter.wet}
            property="autoFilterWet"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Frequency"
            min={0}
            max={10}
            step={0.01}
            value={settings.autoFilter.frequency}
            property="autoFilterFrequency"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Depth"
            min={0}
            max={1}
            step={0.01}
            value={settings.autoFilter.depth}
            property="autoFilterDepth"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="BaseFrequency"
            min={0}
            max={400}
            step={0.01}
            value={settings.autoFilter.baseFrequency}
            property="autoFilterBaseFrequency"
            handleChange={handleValueChange}
          />

          <SC_ToggleButtonSet
            name="Type"
            options={options}
            value={settings.autoFilter.type}
            property="autoFilterType"
            handleChange={handleValueChange}
          />
        </div>
      </div>
    )
  }
}
