var TRAIT = {
  ABILITY: 'ability_score_increase',
  SKILL: 'skill',
  APPEARANCE: 'appearance',
  ALIGNMENT: 'alignment',
  SPEED: 'speed',
  CHOICE: 'choice',
  LANGUAGE: 'language'
};

var ABILITY = {
  STR: 'strength',
  DEX: 'dexterity',
  CON: 'constitution',
  INT: 'intelligence',
  WIS: 'wisdom',
  CHA: 'charisma'
}

var races = [
  'Dwarf',
  'Elf',
  'Halfling',
  'Human',
  'Dragonborn',
  'Gnome',
  'Half-Elf',
  'Half-Orc',
  'Tiefling'
];

var subraces = {
  'Dwarf': [
    'Hill Dwarf',
    'Mountain Dwarf'
  ],
  'Elf': [
    'High Elf',
    'Wood Elf',
    'Dark Elf/Drow'
  ],
  'Halfling': [
    'Lightfoot',
    'Stout'
  ],
  'Human': [
    'Calashite',
    'Chondathan',
    'Damaran',
    'Illuskan',
    'Mulan',
    'Rashemi',
    'Shou',
    'Tethyrian',
    'Turami'
  ],
  'Dragonborn': [
    'Black',
    'Blue',
    'Brass',
    'Bronze',
    'Copper',
    'Gold',
    'Green',
    'Red',
    'Silver',
    'White'
  ],
  'Gnome': [
    'Forest Gnome',
    'Rock Gnome'
  ],
  'Half-Elf': [],
  'Half-Orc': [],
  'Tiefling': []
};

function createTrait( type, name, value, per_level, proficient ) {
  var o = {
    type: type,
    name: name
  };

  if ( value !== undefined ) {
    if ( type == TRAIT.CHOICE ) {
      o.options = value;
    } else {
      o.value = value;
    }
  }
  if ( per_level !== undefined ) o.per_level = per_level;
  if ( proficient !== undefined ) o.proficient = proficient;

  return o;
};

function createFeature( name, value ) {
  return {
    name: name,
    value: value
  };
};

var race_traits = {
  'Dwarf': [
    createTrait( TRAIT.ABILITY, ABILITY.CON, 2 ),
    createTrait( TRAIT.APPEARANCE, 'age', 'Up to 350 years old' ),
    createTrait( TRAIT.ALIGNMENT, 'alignment', 'Lawful Good' ),
    createTrait( TRAIT.APPEARANCE, 'size', 'Medium' ),
    createTrait( TRAIT.APPEARANCE, 'height', '4 to 5 feet tall' ),
    createTrait( TRAIT.APPEARANCE, 'weight', 'About 150 pounds' ),
    createTrait( TRAIT.SPEED, 'speed', 25 ),
    createTrait( TRAIT.SKILL, 'battleaxe', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'handaxe', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'throwing hammer', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'warhammer', undefined, undefined, true ),
    createTrait( TRAIT.CHOICE, 'tool proficiency', [
        createTrait( TRAIT.SKILL, 'smith\'s tools', undefined, undefined, true ),
        createTrait( TRAIT.SKILL, 'brewer\'s tools', undefined, undefined, true ),
        createTrait( TRAIT.SKILL, 'mason\'s tools', undefined, undefined, true )
      ]
    ),
    createTrait( TRAIT.LANGUAGE, 'common' ),
    createTrait( TRAIT.LANGUAGE, 'dwarvish' )
  ],
  'Elf': [
    createTrait( TRAIT.ABILITY, ABILITY.DEX, 2 ),
    createTrait( TRAIT.APPEARANCE, 'age', 'Up to 750 years old' ),
    createTrait( TRAIT.ALIGNMENT, 'alignment', 'Chaotic Good or Chaotic Evil if Dark Elf/Drow' ),
    createTrait( TRAIT.APPEARANCE, 'size', 'Medium' ),
    createTrait( TRAIT.APPEARANCE, 'height', 'Under 5 to over 6 feet tall' ),
    createTrait( TRAIT.APPEARANCE, 'weight', '100 to 145 pounds' ),
    createTrait( TRAIT.SPEED, 'speed', 30 ),
    createTrait( TRAIT.LANGUAGE, 'common' ),
    createTrait( TRAIT.LANGUAGE, 'elvish' )
  ],
  'Halfling': [],
  'Human': [],
  'Dragonborn': [],
  'Gnome': [],
  'Half-Elf': [],
  'Half-Orc': [],
  'Tiefling': []
};

var race_features = {
  'Dwarf': [
    createFeature( 'Speed', 'Your speed is not reduced by wearing heavy armor.' ),
    createFeature( 'Darkvision', 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' ),
    createFeature( 'Dwarven Resilience', 'You have advantage on saving throws against poison, and you have resistance against poison damage.' ),
    createFeature( 'Stonecunning', 'Wherever you make an Intelligence (History) check related to the origin of stonework, you are considered "proficient" in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.' )
  ],
  'Elf': [
    createFeature( 'Darkvision', 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' ),
    createFeature( 'Keen Senses', 'You have proficiency in the Perception skill.' ),
    createFeature( 'Fey Ancestry', 'You have advantage on saving throws against being charmed, and magic can\'t put you to sleep.' ),
    createFeature( 'Trance', 'Elves don\'t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is "trance.") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.' )
  ],
  'Halfling': [],
  'Human': [],
  'Dragonborn': [],
  'Gnome': [],
  'Half-Elf': [],
  'Half-Orc': [],
  'Tiefling': []
};

var subrace_traits = {
  'Hill Dwarf': [
    createTrait( TRAIT.ABILITY, ABILITY.WIS, 1 ),
    createTrait( TRAIT.ABILITY, 'hp', 1, true )
  ],
  'Mountain Dwarf': [
    createTrait( TRAIT.ABILITY, ABILITY.STR, 2 ),
    createTrait( TRAIT.SKILL, 'light armor', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'medium armor', undefined, undefined, true )
  ],
  'High Elf': [
    createTrait( TRAIT.ABILITY, ABILITY.INT, 1 ),
    createTrait( TRAIT.SKILL, 'longsword', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'shortsword', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'shortbow', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'longbow', undefined, undefined, true ),
    createTrait( TRAIT.CHOICE, 'extra language', [
        createTrait( TRAIT.LANGUAGE, 'dwarvish' ),
        createTrait( TRAIT.LANGUAGE, 'giant' ),
        createTrait( TRAIT.LANGUAGE, 'gnomish' ),
        createTrait( TRAIT.LANGUAGE, 'goblin' ),
        createTrait( TRAIT.LANGUAGE, 'halfling' ),
        createTrait( TRAIT.LANGUAGE, 'orc' ),
        createTrait( TRAIT.LANGUAGE, 'abyssal' ),
        createTrait( TRAIT.LANGUAGE, 'celestial' ),
        createTrait( TRAIT.LANGUAGE, 'draconic' ),
        createTrait( TRAIT.LANGUAGE, 'deep speech' ),
        createTrait( TRAIT.LANGUAGE, 'infernal' ),
        createTrait( TRAIT.LANGUAGE, 'primordial' ),
        createTrait( TRAIT.LANGUAGE, 'sylvan' ),
        createTrait( TRAIT.LANGUAGE, 'undercommon' )
      ]
    )
  ],
  'Wood Elf': [
    createTrait( TRAIT.ABILITY, ABILITY.WIS, 1 ),
    createTrait( TRAIT.SKILL, 'longsword', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'shortsword', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'shortbow', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'longbow', undefined, undefined, true ),
    createTrait( TRAIT.SPEED, 'speed', 35 )
  ],
  'Dark Elf/Drow': [
    createTrait( TRAIT.ABILITY, ABILITY.CHA, 1 ),
    createTrait( TRAIT.SKILL, 'rapier', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'shortsword', undefined, undefined, true ),
    createTrait( TRAIT.SKILL, 'hand crossbow', undefined, undefined, true )
  ],
  'Lightfoot': [],
  'Stout': [],
  'Calashite': [],
  'Chondathan': [],
  'Damaran': [],
  'Illuskan': [],
  'Mulan': [],
  'Rashemi': [],
  'Shou': [],
  'Tethyrian': [],
  'Turami': [],
  'Black': [],
  'Blue': [],
  'Brass': [],
  'Bronze': [],
  'Copper': [],
  'Gold': [],
  'Green': [],
  'Red': [],
  'Silver': [],
  'White': [],
  'Forest Gnome': [],
  'Rock Gnome': []
}

var subrace_features = {
  'Hill Dwarf': [
    createFeature( 'Dwarven Toughness', 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.' )
  ],
  'Mountain Dwarf': [],
  'High Elf': [
    createFeature( 'Cantrip', 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.' )
  ],
  'Wood Elf': [
    createFeature( 'Mask of the Wild', 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.' )
  ],
  'Dark Elf/Drow': [
    createFeature( 'Darkvision', 'You can see in dim light within 120 feet of you as if it were bright light, and in darkness as if it were dim light. You can\'t discern color in darkness, only shades of gray.' ),
    createFeature( 'Sunlight Sensitivity', 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in the direct sunlight.' ),
    createFeature( 'Drow Magic', 'You know the "dancing lights" cantrip. When you reach 3rd level, you can cast the "faerie fire" spell once per day. When you reach 5th level, you can also cast the "darkness" spell once per day. Charisma is your spellcasting ability for these spells.' )
  ],
  'Lightfoot': [],
  'Stout': [],
  'Calashite': [],
  'Chondathan': [],
  'Damaran': [],
  'Illuskan': [],
  'Mulan': [],
  'Rashemi': [],
  'Shou': [],
  'Tethyrian': [],
  'Turami': [],
  'Black': [],
  'Blue': [],
  'Brass': [],
  'Bronze': [],
  'Copper': [],
  'Gold': [],
  'Green': [],
  'Red': [],
  'Silver': [],
  'White': [],
  'Forest Gnome': [],
  'Rock Gnome': []
}

function createDoc() {
  var doc = {
    title: 'Choose a Race',
    races: races.map( createRace )
  };

  return JSON.stringify( doc );
};

function createRace( name ) {
  var race = {
    name: name,
    subraces: subraces[name].map( createSubrace ),
    traits: race_traits[name],
    features: race_features[name]
  };

  return race;
};

function createSubrace( name ) {
  var subrace = {
    name: name,
    traits: subrace_traits[name],
    features: subrace_features[name]
  };

  return subrace;
};

console.log( createDoc() );
