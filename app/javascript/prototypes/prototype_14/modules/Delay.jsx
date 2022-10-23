import React, { Component } from 'react'

import SC_Slider from '../components/SC_Slider.jsx'

export default class Delay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="module Delay">
        <div className="heading">
          <h2>Delay</h2>
        </div>
        <div className="modulebase">
          <SC_Slider
            name="Wet"
            min={0}
            max={1}
            step={0.01}
            value={settings.pingPongDelay.wet}
            property="pingPongDelayWet"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="DelayTime"
            min={0}
            max={1}
            step={0.01}
            value={settings.pingPongDelay.delayTime}
            property="pingPongDelayDelayTime"
            handleChange={handleValueChange}
          />
          <SC_Slider
            name="MaxDelayTime"
            min={0}
            max={4}
            step={0.01}
            value={settings.pingPongDelay.maxDelayTime}
            property="pingPongDelayDelayMaxDelayTime"
            handleChange={handleValueChange}
          />

        </div>
      </div>
    )
  }
}
