//intro content
function Content(description) {
    this.description = description
}

let homeContent = [
    new Content("Mythical creatures are legendary beings found in folklore, mythology, and ancient tales from different cultures around the world. These creatures often possess supernatural abilities, represent symbolic meanings, and inspire countless stories. Some are majestic protectors, while others are fearsome beasts that challenge heroes in epic adventures"),
]

let landContent = [
    new Content("Land mythical creatures are legendary beings that roam forests, mountains, and ancient landscapes in myths and folklore. They are often associated with power, wisdom, protection, or terror, depending on their origin and characteristics. Some are majestic guardians, while others are fearsome beasts challenging heroes in epic tales."),
]

let waterContent = [
    new Content("Water mythical creatures are legendary beings that dwell in oceans, rivers, lakes, and deep seas. They often represent the mystery and power of water, symbolizing everything from life and wisdom to danger and chaos. Many cultures have stories of sea monsters, enchanting mermaids, and powerful deities controlling the waves.")
]

//stylesheet declaration
let homeStyle = "styles.css";
let featureStyle = "feature.css"

//details for subroutes
function Subroutes(name,logo,image,description,shape,origin,power,habitat,height,alignment){
    this.name=name,
    this.logo=logo,
    this.image=image,
    this.description=description,
    this.shape=shape,
    this.origin=origin,
    this.power=power,
    this.habitat=habitat,
    this.height=height,
    this.alignment=alignment
}

let landCreature = [
    new Subroutes("unicorn",
                "/images/unicorn-icon.svg",
                "/images/unicorn.jpg",
                "The unicorn has existed in myths and legends for thousands of years, appearing in various cultures worldwide. Some of the earliest depictions of unicorn-like creatures appear in Mesopotamian seals and ancient Indian art. The Indus Valley Civilization had images of a one-horned animal, possibly inspiring later unicorn myths. Greek historian Ctesias (5th century BCE) wrote about a horse-like animal with a single horn, believed to live in India. Roman authors like Pliny the Elder described unicorns as fierce creatures resembling a mix of a horse, a stag, and a wild ox.In Chinese mythology, the Qilin is a unicorn-like creature symbolizing wisdom, prosperity, and peace. It was believed to appear only during the rule of a wise emperor or the birth of a great leader. During the Middle Ages, the unicorn became a symbol of purity and divinity, often linked to Christianity. Medieval Christians saw the unicorn as a representation of Christ, embodying purity, sacrifice, and divine power. Stories claimed that only a virgin could tame a unicorn, symbolizing the Virgin Mary. Many believed unicorn horns, known as alicorns, had magical healing properties, and kings and nobles paid high prices for them. In reality, these were often narwhal tusks sold by merchants.In modern times, unicorns are widely seen as symbols of magic, innocence, and rarity in fantasy stories and popular culture. They appear in books like Harry Potter and The Last Unicorn and are associated with rainbows, dreams, and positivity. The term “unicorn startup” is used to describe rare and highly successful technology companies. Despite their mythical origins, unicorns continue to inspire wonder and fascination across generations.",
                "A beautiful, white horse with a long, spiraled horn on its forehead.Sometimes depicted with cloven hooves and a lion-like tail",
                " Ancient Mesopotamian and Indian texts",
                "Healing through its horn, speed, purity detection",
                "Enchanted forests, hidden meadows, mystical glades",
                "Similar to a horse, about 5-7 feet tall at the shoulder",
                "Always good, symbolizes purity and healing"
    ),

    new Subroutes("griffin",
        "/images/griffin-icon.svg",
        "/images/griffin.jpg",
        "The griffin is a mythical creature with the body of a lion and the head and wings of an eagle, symbolizing strength, wisdom, and guardianship. Found in ancient Persian, Greek, and Egyptian mythology, it was believed to guard treasures and sacred places. With its keen eyesight and powerful wings, the griffin was seen as both noble and fearsome, capable of great speed and unmatched vigilance. Its alignment varies, often depicted as a protector of the innocent but also as a fierce and territorial beast. It is usually around 8 to 12 feet tall, with a wingspan that can reach over 20 feet, making it a dominant presence in both the skies and on land.",
        "Front half of an eagle,Back half of a lion,Often depicted with golden feathers or fur",
        "Greek and Persian mythology and ancient Egyptian, Persian, and medieval European art",
        "Super strength, flight, enhanced vision, guardian instincts",
        "Mountain peaks, vast plains, ancient ruins",
        "Larger than a lion, about 8-12 feet tall ,Wingspan can reach 20+ feet",
        "Usually good, a noble guardian of treasures and sacred places"
    )
]

let waterCreature = [
    new Subroutes("mermaid",
        "/images/mermaid-icon.svg",
        "/images/mermaid.jpg",
        "The mermaid is a legendary sea being with the upper body of a human and the lower half of a fish, appearing in folklore from cultures such as Greek, Norse, and Asian traditions. Often associated with beauty, mystery, and enchantment, mermaids are believed to possess magical abilities like water manipulation, healing, and hypnotic singing. Some legends portray them as benevolent protectors of the ocean, while others depict them as sirens who lure sailors to their doom. They are said to inhabit deep seas, coral reefs, and hidden underwater kingdoms, with some myths suggesting they can transform into humans on land. Their alignment depends on the tale, ranging from kind and nurturing to mischievous or even dangerous.",
        " Half-human, half-fish, often depicted with shimmering scales and long flowing hair.",
        "Ancient mythology from many cultures (Greek, Norse, Celtic, Japanese, etc.).Greek mythology: Related to sirens and nereids.",
        "Water manipulation (control over tides and waves),Enchanting singing (hypnotic effect on sailors).",
        "Ocean depths, coral reefs, enchanted underwater cities (like Atlantis).",
        "Human-sized (5-7 feet on average).Some legends describe giant mermaids up to 10-15 feet.",
        "Good: Benevolent, guiding sailors, healing powers.Bad: Sirens that lure sailors to their doom."
    ),

    new Subroutes("kraken",
        "/images/kraken-icon.svg",
        "/images/kraken.jpg",
        "The kraken is a massive sea monster resembling a giant squid or octopus, known for its ability to destroy entire ships with its powerful tentacles. Originating from Norse mythology, it was believed to dwell in the deep ocean, only surfacing to create whirlpools and drag vessels underwater. Often feared as a destructive force of nature, the kraken is usually seen as a neutral or malevolent being, attacking only when provoked or disturbed. Some accounts describe it as a misunderstood creature rather than an evil one. Its size is said to be enormous, sometimes as large as an island, with tentacles capable of reaching over 100 feet in length. Despite its terrifying reputation, modern interpretations sometimes depict the kraken as an awe-inspiring guardian of the deep rather than a mindless terror of the seas.",
        "Gigantic sea monster resembling an octopus or squid.Multiple long tentacles, glowing eyes, rough or slimy skin.",
        "Norse mythology (first recorded in Scandinavian folklore).Inspired by real giant squids seen by sailors.",
        "Enormous strength (can crush ships with tentacles),Whirlpool creation (can summon massive whirlpools to drown ships).",
        "Deep-sea trenches, abyssal plains, sunken ruins.Cold and dark waters where light barely reaches.",
        "Enormous - can range from 50 to 200 feet.",
        "Typically bad, feared as a monstrous sea terror."
    )
]

export {homeContent,landContent,waterContent,homeStyle,featureStyle,landCreature,waterCreature};