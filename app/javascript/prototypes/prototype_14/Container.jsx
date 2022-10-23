import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass.js'
import * as melodySettings from './tunes/melody.js'
import * as drumsSettings from './tunes/drums.js'
import * as drumsSettings2 from './tunes/drums2.js'

import ToneSynth from './modules/ToneSynth.jsx'
import Channel from './modules/Channel.jsx'
import ChannelForSamplers from './modules/ChannelForSamplers.jsx'
import Chorus from './modules/Chorus.jsx'
import Delay from './modules/Delay.jsx'
import Distortion from './modules/Distortion.jsx'
import AutoFilter from './modules/AutoFilter.jsx'
import Tremolo from './modules/Tremolo.jsx'

import SC_Button from './components/SC_Button'
import SC_Slider from './components/SC_Slider'

let bassSynth
let bassPingPongDelay
let bassPhaser
let bassTremolo
let bassDistortion
let bassAutoFilter
let bassChannel


let melodySynth
let melodyChorus
let melodyPingPongDelay
let melodyChannel
let melodyDistortion

let samplerChannel
let samplerChannel2

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bassSettings,
      melodySettings,
      drumsSettings,
      drumsSettings2
    }
  }

  handleStart = () => {
    const { bassSettings, melodySettings, drumsSettings, drumsSettings2 } = this.state

    //
    //
    bassSynth = new Tone.Synth(bassSettings.synth)

    bassPingPongDelay = new Tone.PingPongDelay(bassSettings.pingPongDelay)
    bassAutoFilter = new Tone.AutoFilter(bassSettings.autoFilter).start();
    bassTremolo = new Tone.Tremolo(bassSettings.tremolo)
    bassDistortion = new Tone.Distortion(bassSettings.distortion)
    bassChannel = new Tone.Channel(bassSettings.channel).toDestination()

    bassSynth.chain(bassPingPongDelay, bassTremolo, bassDistortion, bassAutoFilter, bassChannel)

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)

    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = true
    //
    //
    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()
    melodyPingPongDelay = new Tone.PingPongDelay(melodySettings.pingPongDelay)
    melodyDistortion = new Tone.Distortion(melodySettings.distortion)

    melodyChannel = new Tone.Channel(melodySettings.channel).toDestination()

    melodySynth.chain(melodyChorus, melodyPingPongDelay, melodyDistortion, melodyChannel)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)

    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = true
    //
    //
    const sampler = new Tone.Sampler({
      urls: {
        A1: '00001-Linn-9000-BassDrumrum1.mp3',
        A2: '00017-Linn-9000-Snare.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(['A1', 'A2', 'A1', 'A2'], 0.5)
      // }
    })

    samplerChannel = new Tone.Channel(drumsSettings.channel).toDestination()

    sampler.chain(samplerChannel)

    const drumsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequence.steps).start(0)

    drumsPart.loopEnd = drumsSettings.sequence.duration
    drumsPart.loop = true


    const sampler2 = new Tone.Sampler({
      urls: {
        A1: '00034-Tama-TS-206-Perc-Noise-Long-1.mp3',
        // A2: '00033-Tama-TS-206-Kick-Short-1B.mp3'
        // A2: '00040-Tama-TS-500-BassDrum1.mp3'

        A2: '00047-Vermona-DRM1-MK3-BassDrum13.mp3'

      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(['A1', 'A2', 'A1', 'A2'], 0.5)
      // }
    })

    samplerChannel2 = new Tone.Channel(drumsSettings2.channel).toDestination()

    sampler2.chain(samplerChannel2)

    const drumsPart2 = new Tone.Part((time, note) => {
      sampler2.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings2.sequence.steps).start(0)

    drumsPart2.loopEnd = drumsSettings2.sequence.duration
    drumsPart2.loop = true

    Tone.Transport.start()
  }

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      bassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      bassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value
    } else if (property === 'synthVolume') {
      bassSynth.volume.value = value
      bassSettings.synth.volume = value
    } else if (property === 'synthDetune') {
      bassSynth.detune.value = value
      bassSettings.synth.detune = value
    } else if (property === 'synthPortamento') {
      bassSynth.portamento = value
      bassSettings.synth.portamento = value
    } else if (property === 'synthPhase') {
      bassSynth.oscillator.phase = value
      bassSettings.synth.oscillator.phase = value
    } else if (property === 'synthHarmonicity') {
      bassSynth.oscillator.harmonicity.value = value
      bassSettings.synth.oscillator.harmonicity = value
    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'pingPongDelayDelayTime') {
      bassPingPongDelay.delayTime.value = value
      bassSettings.pingPongDelay.delayTime = value
    } else if (property === 'pingPongDelayDelayMaxDelayTime') {
      bassPingPongDelay.maxDelayTime = value
      bassSettings.pingPongDelay.maxDelayTime = value
    }

    else if (property === 'autoFilterWet') {
      bassAutoFilter.wet.value = value
      bassSettings.autoFilter.wet = value
    } else if (property === 'autoFilterFrequency') {
      bassAutoFilter.frequency.value = value
      bassSettings.autoFilter.frequency = value
    } else if (property === 'autoFilterDepth') {
      bassAutoFilter.depth.value = value
      bassSettings.autoFilter.depth = value
    } else if (property === 'autoFilterBaseFrequency') {
      bassAutoFilter.baseFrequency = value
      bassSettings.autoFilter.baseFrequency = value
    } else if (property === 'autoFilterType') {
      bassAutoFilter.type = value
      bassSettings.autoFilter.type = value
    }

    else if (property === 'distortionWet') {
      bassDistortion.wet.value = value
      bassSettings.distortion.wet = value
    } else if (property === 'distortionDistortion') {
      bassDistortion.distortion = value
      bassSettings.distortion.distortion = value
    }

    else if (property === 'tremoloWet') {
      bassTremolo.wet.value = value
      bassSettings.tremolo.wet = value
    } else if (property === 'tremoloFrequency') {
      bassTremolo.frequency.value = value
      bassSettings.tremolo.frequency = value
    } else if (property === 'tremoloDepth') {
      bassTremolo.depth.value = value
      bassSettings.tremolo.depth = value
    } else if (property === 'tremoloSpread') {
      bassTremolo.spread = value
      bassSettings.tremolo.spread = value
    }

    else if (property === 'channelVolume') {
      bassChannel.volume.value = value
      bassSettings.channel.volume = value
    } else if (property === 'channelMute') {
      bassChannel.mute = value
      bassSettings.channel.mute = value
    } else if (property === 'channelPan') {
      bassChannel.pan.value = value
      bassSettings.channel.pan = value
    }

    this.setState({
      bassSettings
    })
  }

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    } else if (property === 'synthVolume') {
      melodySynth.volume.value = value
      melodySettings.synth.volume = value
    } else if (property === 'synthDetune') {
      melodySynth.detune.value = value
      melodySettings.synth.detune = value
    } else if (property === 'synthPortamento') {
      melodySynth.portamento = value
      melodySettings.synth.portamento = value
    } else if (property === 'synthPhase') {
      melodySynth.oscillator.phase = value
      melodySettings.synth.oscillator.phase = value
    } else if (property === 'synthHarmonicity') {
      melodySynth.oscillator.harmonicity.value = value
      melodySettings.synth.oscillator.harmonicity = value
    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'pingPongDelayDelayTime') {
      melodyPingPongDelay.delayTime.value = value
      melodySettings.pingPongDelay.delayTime = value
    } else if (property === 'pingPongDelayDelayMaxDelayTime') {
      melodyPingPongDelay.maxDelayTime = value
      melodySettings.pingPongDelay.maxDelayTime = value
    }

    else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'chorusFrequency') {
      melodyChorus.frequency.value = value
      melodySettings.chorus.frequency = value
    } else if (property === 'chorusDelayTime') {
      melodyChorus.delayTime = value
      melodySettings.chorus.delayTime = value
    } else if (property === 'chorusSpread') {
      melodyChorus.spread = value
      melodySettings.chorus.spread = value
    } else if (property === 'chorusType') {
      melodyChorus.type = value
      melodySettings.chorus.type = value
    }

    else if (property === 'distortionWet') {
      melodyDistortion.wet.value = value
      melodySettings.distortion.wet = value
    } else if (property === 'distortionDistortion') {
      melodyDistortion.distortion = value
      melodySettings.distortion.distortion = value
    }


    else if (property === 'channelVolume') {
      melodyChannel.volume.value = value
      melodySettings.channel.volume = value
    } else if (property === 'channelMute') {
      melodyChannel.mute = value
      melodySettings.channel.mute = value
    } else if (property === 'channelPan') {
      melodyChannel.pan.value = value
      melodySettings.channel.pan = value
    }

    this.setState({
      melodySettings
    })
  }

  handleDrumsValueChange = (property, value) => {
    const { drumsSettings } = this.state

    if (property === 'channelVolume') {
      samplerChannel.volume.value = value
      drumsSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerChannel.mute = value
      drumsSettings.channel.mute = value
    }

    this.setState({
      drumsSettings
    })
  }

  handleDrums2ValueChange = (property, value) => {
    const { drumsSettings2 } = this.state

    if (property === 'channelVolume') {
      samplerChannel2.volume.value = value
      drumsSettings2.channel.volume = value
    } else if (property === 'channelMute') {
      samplerChannel2.mute = value
      drumsSettings2.channel.mute = value
    }

    this.setState({
      drumsSettings2
    })
  }

  render() {
    const { bassSettings, melodySettings, drumsSettings, drumsSettings2 } = this.state

    return (
      <div className="Container">

        <div className="first">
          <SC_Button
            text="FM Start"
            handleClick={this.handleStart}
          />
          <div className="lights">
            <div id="light1"></div>
            <div id="light2"></div>
            <div id="light3"></div>
            <div id="light4"></div>
            <div id="light5"></div>
            <div id="light6"></div>
            <div id="light7"></div>
            <div id="light8"></div>
            <div id="light9"></div>
            <div id="light10"></div>
            <div id="light11"></div>
            <div id="light12"></div>
            <div id="light13"></div>
            <div id="light14"></div>
            <div id="light15"></div>
            <div id="light16"></div>
          </div>

        </div>

        <div className="block drumsblock">
          <div className="blocktitle">
            <h1>Samplers</h1>
          </div>
          <div className="column">
            <div className="heading">
              <h2>Channel</h2>
            </div>
            <ChannelForSamplers
              settings={drumsSettings}
              handleValueChange={this.handleDrumsValueChange}
            />
          </div>
          <div className="column">
            <div className="heading">
              <h2>Channel</h2>
            </div>
            <ChannelForSamplers
              settings={drumsSettings2}
              handleValueChange={this.handleDrums2ValueChange}
            />
          </div>

        </div>

        <div className="block melodyblock">
          <div className="blocktitle">
            <h1>Main Melody</h1>
          </div>

          <div className="column">
            <ToneSynth
              settings={melodySettings}
              handleValueChange={this.handleMelodyValueChange}
            />
          </div>
          <div className="column">
            <Chorus
              settings={melodySettings}
              handleValueChange={this.handleMelodyValueChange}
            />
            <Delay
              settings={melodySettings}
              handleValueChange={this.handleMelodyValueChange}
            />
          </div>
          <div className="column">
            <Channel
              settings={melodySettings}
              handleValueChange={this.handleMelodyValueChange}
            />
            <Distortion
              settings={melodySettings}
              handleValueChange={this.handleMelodyValueChange}
            />
          </div>
        </div>

        <div className="block bassblock">
          <div className="blocktitle">
            <h1>Bass</h1>
          </div>
          <div className="column">
            <ToneSynth
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange}
            />
            <div className="futter">
              <h2>Design & Coding</h2>
              <h2>Karina Mulkamanova</h2>
              <h2>HSE ADC 2022</h2>

            </div>
          </div>
          <div className="column">

            <Delay
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange}
            />
            <Tremolo
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange}
            />
            <Distortion
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange}
            />

          </div>
          <div className="column">
            <Channel
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange}
            />
            <AutoFilter
              settings={bassSettings}
              handleValueChange={this.handleBassValueChange}
            />
          </div>


        </div>



      </div>
    )
  }
}
