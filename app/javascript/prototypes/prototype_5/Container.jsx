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
        type: 'square',  // "fatsine" | "fatsquare" | "fatsawtooth" | "fattriangle" | "fatcustom" | FatTypeWithPartials | "fmsine" | "fmsquare" | "fmsawtooth" | "fmtriangle" | "fmcustom" | FMTypeWithPartials | "amsine" | "amsquare" | "amsawtooth" | "amtriangle" | "amcustom" | AMTypeWithPartials | TypeWithPartials | OscillatorType | "pulse" | "pwm"
        modulationType: 'sine',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }
  const synth = new Tone.Synth(synthSettings)

  const distortionSettings = {
    wet: 1,
    distortion: 1,
    oversample: '4x'
  }
  // const distortion = new Tone.Distortion(distortionSettings).toDestination()

  const chorusSettings = {
      wet: 0.3,
      type: 'sine',
      frequency: 10,
      delayTime: 10,
      depth: 0.7,
      spread: 180
    }
  const chorus = new Tone.Chorus(chorusSettings).start()

  const pingPongDelaySettings = {
    wet: 0.4,
    delayTime: 0.25,
    maxDelayTime: 1 }
  const pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings)

  const jcReverbSettings = {
    wet: 1,
    roomSize: 0.6
  }
  // const jcReverb = new Tone.JCReverb(jcReverbSettings).toDestination()

  const freeverbSettings = {
    wet: 1,
    roomSize: 0.5,
    dampening: 10
  }
  const freeverb = new Tone.Freeverb(freeverbSettings)

  const channelSettings = {
    volume: 0,
    pan: 0,
    mute: false,
    solo: false
  }
  const channel = new Tone.Channel(channelSettings).toDestination()

  synth.chain(channel)
  synth.triggerAttackRelease('C4', '1')




    // ???????????????? ??????????????
  const sequence = [
    {
      time: '0:0:0',
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:0:2',
      noteName: 'A3',
      duration: '1n',
      velocity: 1
    },
    {
      time: '0:1:0',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:2:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:0',
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:1',
      noteName: 'E3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '0:3:2',
      noteName: 'G3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:0:0',
      noteName: 'D3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:1:2',
      noteName: 'E4',
      duration: '4n',
      velocity: 0.7
    },
    {
      time: '1:1:3',
      noteName: 'D4',
      duration: '4n',
      velocity: 0.8
    },
    {
      time: '1:2:0',
      noteName: 'C3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:0',
      noteName: 'G3',
      duration: '4n',
      velocity: 1
    },
    {
      time: '1:3:2',
      noteName: 'C4',
      duration: '4n',
      velocity: 1
    }
  ]

  // ?????????????? ????????????, ?????????????????? ?? ?????? ??????????????????
  // ?? ???????????????? ????????????????????????
  const part = new Tone.Part((time, note) => {
    synth.triggerAttackRelease(
      note.noteName,
      note.duration,
      time,
      note.velocity
    )
  }, sequence).start(0)

  // ?????????????????? ???????????????????????? ????????????
  part.loopEnd = '2m'

  // ???????????????? ????????????????????????
  part.loop = true

  // ???????????????? ???????? ?? ????????????????
  // sampler.context.resume()

  // ???????????????? ???????????? ?????????????? ?? Tone.js
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
