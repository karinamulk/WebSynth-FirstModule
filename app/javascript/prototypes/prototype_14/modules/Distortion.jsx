import React, { Component } from 'react'

import SC_Slider from '../components/SC_Slider.jsx'

export default class Distortion extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="module Distortion">
        <div className="heading">
          <h2>Distortion</h2>
        </div>
        <div className="modulebase">
          <SC_Slider
            name="Wet"
            min={0}
            max={1}
            step={0.01}
            value={settings.distortion.wet}
            property="distortionWet"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="Distortion"
            min={0}
            max={1}
            step={0.01}
            value={settings.distortion.distortion}
            property="distortionDistortion"
            handleChange={handleValueChange}
          />


        </div>
      </div>
    )
  }
}
