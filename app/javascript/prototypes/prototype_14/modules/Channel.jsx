import React, { Component } from 'react'

import SC_ToggleButton from '../components/SC_ToggleButton.jsx'
import SC_Slider from '../components/SC_Slider.jsx'
import SC_Knob from '../components/SC_Knob.jsx'

export default class Channel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="module Channel">
        <div className="heading">
          <h2>Channel</h2>
        </div>
        <div className="modulebase">

          <div className="channelRound">
            <div className="channelRound2">
              <div className="channelRound3">
                <div className="channelRound4">
                  <SC_ToggleButton
                    text="Mute"
                    isOn={settings.channel.mute}
                    handleClick={() =>
                      handleValueChange('channelMute', !settings.channel.mute)
                    }
                  />
                </div>
              </div>
            </div>
          </div>


          <div className="knobsline knobslinePan">
            <SC_Knob
              name="Volume"
              min={-60}
              max={60}
              value={settings.channel.volume}
              property="channelVolume"
              handleChange={handleValueChange}
            />
            <SC_Knob
              name="Pan"
              min={-1}
              max={1}
              value={0}
              property="channelPan"
              handleChange={handleValueChange}
            />
          </div>


        </div>
      </div>
    )
  }
}
