import React, { Component } from 'react'

import SC_Slider from '../components/SC_Slider.jsx'
import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'


export default class Chorus extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props
    const options = ['sine', 'square', 'sawtooth', 'triangle']


    return (
      <div className="module Chorus">
        <div className="heading">
          <h2>Chorus</h2>
        </div>
        <div className="modulebase">
          <SC_Slider
            name="Wet"
            min={0}
            max={1}
            step={0.01}
            value={settings.chorus.wet}
            property="chorusWet"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Frequency"
            min={0}
            max={10}
            step={0.01}
            value={settings.chorus.frequency}
            property="chorusFrequency"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="DelayTime"
            min={0}
            max={10}
            step={0.01}
            value={settings.chorus.delayTime}
            property="chorusDelayTime"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Spread"
            min={0}
            max={400}
            step={0.01}
            value={settings.chorus.spread}
            property="chorusSpread"
            handleChange={handleValueChange}
          />

          <SC_ToggleButtonSet
            name="Type"
            options={options}
            value={settings.chorus.type}
            property="chorusType"
            handleChange={handleValueChange}
          />
        </div>
      </div>
    )
  }
}
