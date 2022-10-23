import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const synthSettings = {
      volume: 15,
      detune: 0,
      portamento: 0.5,
      envelope: {
        attack: 0.02,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 3,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'fatsine',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
        modulationType: 'triangle',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }
  const synth = new Tone.Synth(synthSettings)

  const vibratoSettings = {
    wet: 0.7,
    maxDelay: 0.005,
    frequency: 2,
    depth: 0.1,
    type: 'sine'
  }
  const vibrato = new Tone.Vibrato(vibratoSettings)

  const chorusSettings = {
      wet: 0.3,
      type: 'sine',
      frequency: 3,
      delayTime: 4,
      depth: 0.7,
      spread: 180
    }
  const chorus = new Tone.Chorus(chorusSettings).start()

  const autoFilterSettings = {
    wet: 0,
    type: 'sine',
    frequency: 1,
    depth: 1,
    baseFrequency: 200,
    octaves: 2.6,
    filter: {
      type: 'lowpass',
      frequency: 100,
      rolloff: -12,
      Q: 1
    }
  }
  const autoFilter = new Tone.AutoFilter(autoFilterSettings).start();

  const channelSettings = {
    volume: 0,
    pan: 0,
    mute: false,
    solo: false
  }
  const channel = new Tone.Channel(channelSettings).toDestination()



  synth.chain(vibrato, chorus, channel)
  synth.triggerAttackRelease('C4', '1')





  const sequence = [
    {
      time: '0:0:0',
      noteName: 'C4',
      duration: '1m',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'B3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'F3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:1',
      noteName: 'A3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:2:2',
      noteName: 'A3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:2:3',
      noteName: 'B3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'E3',
      duration: '1m',
      velocity: 1
    },
    {
      time: '2:0:0',
      noteName: 'G3',
      duration: '1m',
      velocity: 1
    },

    {
      time: '3:0:0',
      noteName: 'D4',
      duration: '1m',
      velocity: 0.3
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
  part.loopEnd = '4m'

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
