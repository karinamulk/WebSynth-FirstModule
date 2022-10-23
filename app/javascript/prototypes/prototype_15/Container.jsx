import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    const synthSettings = {
      volume: -10,
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
        type: 'triangle',
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }
  const synth = new Tone.Synth(synthSettings)

  // const vibratoSettings = {
  //   wet: 0.7,
  //   maxDelay: 0.005,
  //   frequency: 2,
  //   depth: 0.1,
  //   type: 'sine'
  // }
  // const vibrato = new Tone.Vibrato(vibratoSettings)

  const chorusSettings = {
    wet: 0.3,
    type: 'sine',
    frequency: 1.5,
    delayTime: 3.5,
    depth: 0.7,
    spread: 180
  }
  const chorus = new Tone.Chorus(chorusSettings).start()

  const pingPongDelaySettings = {wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }
  const pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings)

  const distortionSettings = {
    wet: 1,
    distortion: 0.8,
    oversample: '2x'
  }
  const distortion = new Tone.Distortion(distortionSettings)


  const autoFilterSettings = {
    wet: 1,
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

  const freeverbSettings = {
    wet: 0.9,
    roomSize: 0.08,
    dampening: 40
  }
  const freeverb = new Tone.Freeverb(freeverbSettings)

  const phaserSettings = {
    wet: 0,
    frequency: 0.5,
    octaves: 3,
    stages: 10,
    Q: 10,
    baseFrequency: 350
  }
  const phaser = new Tone.Phaser(phaserSettings)

  const tremoloSettings = {
    wet: 1,
    frequency: 20,
    type: 'square',
    depth: 0.5,
    spread: 180
  }
  const tremolo = new Tone.Tremolo(tremoloSettings)

  const channelSettings = {
    volume: 0,
    pan: 0,
    mute: false,
    solo: false
  }
  const channel = new Tone.Channel(channelSettings).toDestination()



  synth.chain(pingPongDelay, tremolo, distortion, autoFilter, channel)






  const sequence = [
    {
      time: '0:0:0',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:0:2',
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'C2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:1:2',
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'E2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:2',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'E2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:2',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:2:2',
      noteName: 'A2',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:2',
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
