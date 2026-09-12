export interface Words {
  id: number;
  word: string;
  translation: string;
  example: string;
}

export const WORDS: Words[] = [
  {
    id: 1,
    word: "benevolent",
    translation: "добрый, благожелательный",
    example: "She gave me a benevolent smile.",
  },
  {
    id: 2,
    word: "persistent",
    translation: "настойчивый",
    example: "He is persistent in achieving his goals.",
  },
  {
    id: 3,
    word: "ambitious",
    translation: "амбициозный",
    example: "She is an ambitious developer.",
  },
  {
    id: 4,
    word: "curious",
    translation: "любопытный",
    example: "He is curious about new technologies.",
  },
  {
    id: 5,
    word: "resilient",
    translation: "стойкий",
    example: "She is resilient when facing difficulties.",
  },
];

export const TITLES = [
  "Word of the Day",
  "Word of the Moment",
  "Expand Your Vocabulary",
  "Word to Remember",
  "Today's Challenge",
  "Learn Something New",
];
