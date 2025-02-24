function Content(heading,description) {
    this.heading =  heading ,
    this.description = description
}

let contentArray = [
    new Content(" Legends of Fantasy and Folklore ","Mythical creatures are legendary beings that appear in folklore, mythology, and fantasy tales across cultures. These creatures often symbolize power, mystery, or the supernatural, blending human imagination with ancient beliefs. Some are fearsome beasts, while others are magical protectors.")
]

console.log(contentArray[0].heading)

export default contentArray;