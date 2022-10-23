import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const synthSettings = {
      volume: 10,
      detune: 0,
      portamento: 0.01,
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
        type: 'amtriangle',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }
  const synth = new Tone.Synth(synthSettings)

  const autoWahSettings = {
    wet: 0.5,
    baseFrequency: 150,
    octaves: 6,
    sensitivity: 0,
    Q: 2,
    gain: 4,
    follower: 0.3
  }
  const autoWah = new Tone.AutoWah(autoWahSettings)

  const freeverbSettings = {
    wet: 0.9,
    roomSize: 0.08,
    dampening: 70
  }
  const freeverb = new Tone.Freeverb(freeverbSettings)

  const feedbackDelaySettings = {
    wet: 1,
    delayTime: 0.3,
    maxDelay: 0.5
  }
  const feedbackDelay = new Tone.FeedbackDelay(feedbackDelaySettings)

  const channelSettings = {
    volume: 0,
    pan: 0,
    mute: false,
    solo: false
  }
  const channel = new Tone.Channel(channelSettings).toDestination()



  synth.chain(autoWah, feedbackDelay, freeverb, channel)
  synth.triggerAttackRelease('C4', '1')





  const sequence = [
    {
      time: '0:0:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'B4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:2',
      noteName: 'C3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:2:3',
      noteName: 'D3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'A4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'D5',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'G4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:2',
      noteName: 'G3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:3',
      noteName: 'F3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'D4',
      duration: '4n',
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

  // Включаем звук в браузере
  // sampler.context.resume()

  // Включаем отсчёт времени в Tone.js
  Tone.Transport.start()
  }



  render() {
    return (
      <div className="Container">
        <SC_Button
          text="Art Design & Coding Community"
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}
