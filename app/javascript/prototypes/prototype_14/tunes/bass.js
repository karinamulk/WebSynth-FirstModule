const synth = {
  volume: 0,
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



const pingPongDelay = { wet: 0.2, delayTime: 0.25, maxDelayTime: 1 }

const tremolo = {
  wet: 0,
  frequency: 20,
  type: 'square',
  depth: 0.5,
  spread: 180
}

const autoFilter = {
  wet: 0.6,
  type: 'sine',
  frequency: 0.8,
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

const distortion = {
  wet: 0,
  distortion: 0.8,
  oversample: '2x'
}

const channel = {
  volume: 0,
  mute: false
}

const sequence = {
  steps: [
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
  ],
  duration: '2m'
}

export { synth, pingPongDelay, channel, sequence, tremolo, autoFilter, distortion }
