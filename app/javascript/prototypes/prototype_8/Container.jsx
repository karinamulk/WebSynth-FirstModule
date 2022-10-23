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
        attack: 0.5,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 2,
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
  const synth = new Tone.Synth(synthSettings)

  const chebyshevSettings = {
    wet: 0.1,
    order: 10,
    oversample: 'none'
  }
  const chebyshev = new Tone.Chebyshev(chebyshevSettings)

  const phaserSettings = {
    wet: 0,
    frequency: 0.5,
    octaves: 3,
    stages: 3,
    Q: 3,
    baseFrequency: 350
  }
  const phaser = new Tone.Phaser(phaserSettings)

  const chorusSettings = {
      wet: 0.1,
      type: 'sine',
      frequency: 3,
      delayTime: 0,
      depth: 0.2,
      spread: 50
    }
  const chorus = new Tone.Chorus(chorusSettings).start()

  const channelSettings = {
    volume: 0,
    pan: 0,
    mute: false,
    solo: false
  }
  const channel = new Tone.Channel(channelSettings).toDestination()



  synth.chain( chebyshev, chorus, channel)
  synth.triggerAttackRelease('C4', '1')





  const sequence = [
    {
      time: '0:0:0',
      noteName: 'B3',
      duration: '4n',
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
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'B3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'D2',
      duration: '8t',
      velocity: 1
    },
    {
      time: '0:3:3',
      noteName: 'C2',
      duration: '8t',
      velocity: 1
    },
    {
      time: '1:0:2',
      noteName: 'D3',
      duration: '8t',
      velocity: 1
    },
    {
      time: '1:0:3',
      noteName: 'D3',
      duration: '8t',
      velocity: 1
    },

    {
      time: '1:1:0',
      noteName: 'D2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'D2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:1',
      noteName: 'A2',
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
