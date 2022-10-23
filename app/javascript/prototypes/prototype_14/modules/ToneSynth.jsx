import React, { Component } from 'react'

import SC_ToggleButtonSet from '../components/SC_ToggleButtonSet.jsx'
import SC_Slider from '../components/SC_Slider.jsx'
import SC_Knob from '../components/SC_Knob.jsx'

export default class ToneSynth extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props
    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="module ToneSynth">
        <div className="heading">
          <h2>Synth</h2>
        </div>
        <div className="modulebase">
          <div className="knobsline knobslineDet">
            <SC_Knob
              name="Volume"
              min={-20}
              max={20}
              value={settings.synth.volume}
              property="synthVolume"
              handleChange={handleValueChange}
            />
            <SC_Knob
              name="Detune"
              min={-20}
              max={20}
              value={settings.synth.detune}
              property="synthDetune"
              handleChange={handleValueChange}
            />
          </div>


            <SC_Slider
              name="Synth Envelope Attack"
              min={0}
              max={10}
              step={0.01}
              value={settings.synth.envelope.attack}
              property="synthEnvelopeAttack"
              handleChange={handleValueChange}
            />

            <SC_Slider
              name="Synth Envelope Decay"
              min={0}
              max={10}
              step={0.01}
              value={settings.synth.envelope.decay}
              property="synthEnvelopeDecay"
              handleChange={handleValueChange}
            />

            <SC_Slider
              name="Synth Envelope Sustain"
              min={0}
              max={1}
              step={0.01}
              value={settings.synth.envelope.sustain}
              property="synthEnvelopeSustain"
              handleChange={handleValueChange}
            />

            <SC_Slider
              name="Synth Envelope Release"
              min={0}
              max={10}
              step={0.01}
              value={settings.synth.envelope.release}
              property="synthEnvelopeRelease"
              handleChange={handleValueChange}
            />
          




          <SC_ToggleButtonSet
            name="Type"
            options={options}
            value={settings.synth.oscillator.type}
            property="synthType"
            handleChange={handleValueChange}
          />

          <SC_Slider
            name="Portamento"
            min={0}
            max={1}
            step={0.01}
            value={settings.synth.portamento}
            property="synthPortamento"
            handleChange={handleValueChange}
          />



          <SC_Slider
            name="Phase"
            min={-10}
            max={10}
            step={0.01}
            value={settings.synth.oscillator.phase}
            property="synthPhase"
            handleChange={handleValueChange}
          />


        </div>



      </div>
    )
  }
}
