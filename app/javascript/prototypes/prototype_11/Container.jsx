import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'
import SC_ToggleButtonSet from './SC_ToggleButtonSet'
import SC_Slider from './SC_Slider'



let synth
let synth2
let chorus
let pingPongDelay
let autoWah
let freeverb

export default class Container extends Component {
  constructor(props) {
    super(props)
    const synthSettings = {
      volume: 10,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 1.5,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'sine',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }

    const synthSettings2 = {
      volume: 10,
      detune: 0,
      portamento: 0.05,
      envelope: {
        attack: 0.05,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 1.5,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'sine',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }

    const pingPongDelaySettings = {
      wet: 0,
      delayTime: 0.25,
      maxDelayTime: 1
    }
    const chorusSettings = {
        wet: 0,
        type: 'sine',
        frequency: 10,
        delayTime: 10,
        depth: 0.7,
        spread: 180
    }
    const autoWahSettings = {
      wet: 0.5,
      baseFrequency: 150,
      octaves: 6,
      sensitivity: 0,
      Q: 2,
      gain: 4,
      follower: 0.3
    }
    const freeverbSettings = {
      wet: 1,
      roomSize: 0.5,
      dampening: 10
    }

    this.state = {
      synthSettings,
      synthSettings2,
      pingPongDelaySettings,
      chorusSettings,
      autoWahSettings,
      freeverbSettings
    }
  }

  handleStart = () => {
    const {synthSettings, synthSettings2, pingPongDelaySettings, chorusSettings, autoWahSettings, freeverbSettings} = this.state
    synth = new Tone.Synth(synthSettings)
    synth2 = new Tone.Synth(synthSettings2)
    chorus = new Tone.Chorus(chorusSettings).start()
    autoWah = new Tone.AutoWah(autoWahSettings)
    freeverb = new Tone.Freeverb(freeverbSettings)


    pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings).toDestination()

    synth.chain(chorus, freeverb, autoWah, pingPongDelay)



    // Тестовая мелодия
  const sequence = [

    {
      time: '0:0:0',
      noteName: 'G1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'B1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:2',
      noteName: 'B1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'C1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'Ab2',
      duration: '4n',
      velocity: 0.5
    },
    {
      time: '1:0:0',
      noteName: 'B1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:2',
      noteName: 'B1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'C1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'G1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'C1',
      duration: '4n',
      velocity: 1
    }

  ]

  const sequence2 = [

    {
      time: '0:0:0',
      noteName: 'G3',
      duration: '2m',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'C3',
      duration: '2m',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'B3',
      duration: '2m',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'G3',
      duration: '2m',
      velocity: 1
    }

  ]

  // Создаём партию, добавляем в неё секвенцию
  // и включаем проигрывание
  const part = new Tone.Part((time, note) => {
    synth.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  }, sequence).start(0)

  // Указываем длительность партии
  part.loopEnd = '2m'

  // Включаем зацикливание
  part.loop = true

  const part2 = new Tone.Part((time, note) => {
    synth2.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  }, sequence2).start(0)

  part2.loopEnd = '2m'
  part2.loop = true

  // Включаем звук в браузере
  // sampler.context.resume()

  // Включаем отсчёт времени в Tone.js
  Tone.Transport.start()
  }

handleValueChange = (property, value) => {
  const {synthSettings, pingPongDelaySettings, chorusSettings, autoWahSettings, freeverbSettings} = this.state

  if (property === 'synthType') {
    synth.oscillator.type = value
    synthSettings.oscillator.type = value
  } else if (property === 'pingPongDelayWet') {
    pingPongDelay.wet.value = value
    pingPongDelaySettings.wet = value
  } else if (property === 'chorusWet') {
    chorus.wet.value = value
    chorusSettings.wet = value
  } else if (property === 'autoWahWet') {
    autoWah.wet.value = value
    autoWahSettings.wet = value
  } else if (property === 'freeverbWet') {
    freeverb.wet.value = value
    freeverbSettings.wet = value
  }

  this.setState ({
    synthSettings,
    chorusSettings,
    pingPongDelaySettings,
    autoWahSettings,
    freeverbSettings
  })

}


  render() {
    const {synthSettings, synthSettings2, pingPongDelaySettings, chorusSettings, autoWahSettings, freeverbSettings} = this.state
    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleStart}
        />
        <SC_ToggleButtonSet
          name="Type"
          options={options}
          value={synthSettings.oscillator.type}
          property="synthType"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={pingPongDelaySettings.wet}
          property="pingPongDelayWet"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={chorusSettings.wet}
          property="chorusWet"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="AutoWah Wet"
          min={0}
          max={1}
          step={0.01}
          value={autoWahSettings.wet}
          property="autoWahWet"
          handleChange={this.handleValueChange}
        />
        <SC_Slider
          name="Freeverb Wet"
          min={0}
          max={1}
          step={0.01}
          value={freeverbSettings.wet}
          property="freeverbWet"
          handleChange={this.handleValueChange}
        />
      </div>
    )
  }
}
