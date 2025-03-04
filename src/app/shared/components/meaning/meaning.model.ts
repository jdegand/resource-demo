export interface Meaning {
    partOfSpeech: string
    definitions: Definition[]
    synonyms: string[]
    antonyms: string[]
}

export interface Definition {
    definition: string
    synonyms: string[]
    antonyms: string[]
    example?: string
}