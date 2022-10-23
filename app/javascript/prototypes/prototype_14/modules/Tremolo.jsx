import React, { Component } from 'react'

import SC_Slider from '../components/SC_Slider.jsx'


export default class Tremolo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props


    return (
      <div className="module Tremolo">
        <div className="heading">
          <h2>Tremolo</h2>
        </div>
        <div className="modulebase">
          <SC_Slider
            name="Wet"
            min={0}
            max={1}
            step={0.01}
            value={settings.tremolo.wet}
            property="tremoloWet"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Frequency"
            min={0}
            max={20}
            step={0.01}
            value={settings.tremolo.frequency}
            property="tremoloFrequency"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Depth"
            min={0}
            max={1}
            step={0.01}
            value={settings.tremolo.depth}
            property="tremoloDepth"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Spread"
            min={0}
            max={400}
            step={0.01}
            value={settings.tremolo.spread}
            property="tremoloSpread"
            handleChange={handleValueChange}
          />

        </div>
      </div>
    )
  }
}
