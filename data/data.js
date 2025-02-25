function Content(heading,description) {
    this.heading =  heading,
    this.description = description
}

let homeContent = [
    new Content(" Legends of Fantasy and Folklore ","Mythical creatures are legendary beings found in folklore, mythology, and ancient tales from different cultures around the world. These creatures often possess supernatural abilities, represent symbolic meanings, and inspire countless stories. Some are majestic protectors, while others are fearsome beasts that challenge heroes in epic adventures"),
    new Content(" Land Creatures 🦄 ", "Unicorn - A majestic horse-like creature with a single spiraled horn, symbolizing purity."),
    new Content(""," Griffin - A majestic hybrid with the body of a lion and the head & wings of an eagle."),
    new Content("","Minotaur - A half-man, half-bull monster from Greek mythology"),
    new Content(" Water Creatures 🌊","Mermaid - A half-human, half-fish being, known for its beauty and mysterious songs"),
    new Content("","Leviathan - A colossal sea serpent mentioned in ancient texts"),
    new Content("","Kraken - A massive sea monster, known for sinking ships."),
    new Content("Fire & Air Creatures 🔥🌪","Dragon - A powerful, fire-breathing serpent found in Eastern and Western myths."),
    new Content("","Phoenix - A legendary bird that bursts into flames and is reborn from its ashes."),
    new Content("","Pegasus - A winged horse from Greek mythology, often linked to heroes."),
    new Content("🌟 Why Are Mythical Creatures Important?","These creatures symbolize human fears, hopes, and dreams, playing key roles in storytelling, ancient beliefs, and even modern fantasy. They continue to inspire books, movies, and games, keeping the magic of mythology alive!")
]

let landContent = [
    new Content("","Land mythical creatures are legendary beings that roam forests, mountains, and ancient landscapes in myths and folklore. They are often associated with power, wisdom, protection, or terror, depending on their origin and characteristics. Some are majestic guardians, while others are fearsome beasts challenging heroes in epic tales."),
    //new Content(" Unicorn - The Symbol of Purity","🦄 A beautiful, horse-like creature with a single spiraled horn on its forehead. It is often associated with purity, healing, and magic. In medieval European legends, unicorns were believed to be untamable except by a pure-hearted individual."),
    //new Content(" Griffin - The Majestic Guardian","🦅🦁 A powerful hybrid with the body of a lion and the head & wings of an eagle. Griffins symbolize strength, nobility, and protection. In Greek and Persian mythology, they guarded treasures and sacred places."),
    //new Content(" Minotaur - The Beast of the Labyrinth","🐂 A fearsome creature with the body of a man and the head of a bull. According to Greek mythology, the Minotaur was imprisoned in a vast labyrinth, where it devoured those who entered. It was eventually slain by the hero Theseus."),
    //new Content("🌟 The Significance of Land Creatures","These mythical beings reflect human imagination, fears, and beliefs about nature, power, and the unknown. Many of them appear in modern fantasy stories, books, and films, keeping their legends alive!")
]

let waterContent = [
    new Content("","Water mythical creatures are legendary beings that dwell in oceans, rivers, lakes, and deep seas. They often represent the mystery and power of water, symbolizing everything from life and wisdom to danger and chaos. Many cultures have stories of sea monsters, enchanting mermaids, and powerful deities controlling the waves.")
]

export {homeContent,landContent,waterContent};