@prototypes_data = [
  {
    name: 'First module / First prototype'
  },
  {
    name: 'First oscillator'
  },
  {
    name: 'Third prototype / Abstraction'
  },
  {
    name: 'Oscillator with React Components'
  },
  {
    name: 'Tone workshop'
  },
  {
    name: 'HW/1: tone, sequence, effects'
  },
  {
    name: 'HW/2: tone, sequence, effects'
  },
  {
    name: 'HW/3: tone, sequence, effects'
  },
  {
    name: 'Tone with UI'
  },
  {
    name: 'Tone with UI, better change function'
  },
  {
    name: 'HW: tone with UI, some synths'
  },
  {
    name: 'Composition'
  },
  {
    name: 'Sampler'
  },
  {
    name: 'Project'
  },
  {
    name: 'Project: effects test'
  }
]

def seed
  reset_db
  create_prototypes
end

def reset_db
  Rake::Task['db:drop'].invoke
  Rake::Task['db:create'].invoke
  Rake::Task['db:migrate'].invoke
end

def create_prototypes
  @prototypes_data.each do |prototype_data|
    prototype = Prototype.create!(prototype_data)
    puts "#{prototype.name} prototype just created"
  end
end

seed
