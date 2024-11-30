import { Section } from '../types/assessment';

const options = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export const personalitySection: Section = {
  id: 'personality',
  title: 'Personality Assessment',
  categories: [
    {
      id: 'openness',
      title: 'Openness to Experience',
      questions: [
        {
          id: 'openness-1',
          text: 'I enjoy exploring new ideas or subjects.',
          options,
        },
        {
          id: 'openness-2',
          text: 'I like learning about new cultures or traditions.',
          options,
        },
      ],
    },
    {
      id: 'conscientiousness',
      title: 'Conscientiousness',
      questions: [
        {
          id: 'conscientiousness-1',
          text: 'I make sure to complete my homework/assignments on time.',
          options,
        },
        {
          id: 'conscientiousness-2',
          text: 'I am well-organized and keep my study materials/books in order.',
          options,
        },
      ],
    },
    {
      id: 'extraversion',
      title: 'Extraversion',
      questions: [
        {
          id: 'extraversion-1',
          text: 'I enjoy participating in group discussions in class.',
          options,
        },
        {
          id: 'extraversion-2',
          text: 'I like being the centre of attention at social gatherings.',
          options,
        },
      ],
    },
    {
      id: 'agreeableness',
      title: 'Agreeableness',
      questions: [
        {
          id: 'agreeableness-1',
          text: 'I often help my classmates with their studies.',
          options,
        },
        {
          id: 'agreeableness-2',
          text: 'I get along well with most of my classmates and teachers.',
          options,
        },
      ],
    },
    {
      id: 'neuroticism',
      title: 'Neuroticism',
      questions: [
        {
          id: 'neuroticism-1',
          text: 'I often feel anxious before exams.',
          options,
        },
        {
          id: 'neuroticism-2',
          text: 'I get upset easily when things don\'t go as planned or as expected.',
          options,
        },
      ],
    },
  ],
};

export const riasecSection: Section = {
  id: 'riasec',
  title: 'Interest Inventory (Holland’s RIASEC Model)',
  categories: [
    {
      id: 'realistic',
      title: 'Realistic (R)',
      questions: [
        {
          id: 'realistic-1',
          text: 'I enjoy working on science/non-science projects or experiments.',
          options,
        },
        {
          id: 'realistic-2',
          text: 'I enjoy working on DIY projects like making models or fixing things at home.',
          options,
        },
      ],
    },
    {
      id: 'investigative',
      title: 'Investigative (I)',
      questions: [
        {
          id: 'investigative-1',
          text: 'I enjoy solving puzzles and brainteasers.',
          options,
        },
        {
          id: 'investigative-2',
          text: 'I like doing research on topics that interest me.',
          options,
        },
      ],
    },
    {
      id: 'artistic',
      title: 'Artistic (A)',
      questions: [
        {
          id: 'artistic-1',
          text: 'I enjoy drawing, painting, designing, or any other forms of art.',
          options,
        },
        {
          id: 'artistic-2',
          text: 'I like writing stories, poems, or essays.',
          options,
        },
      ],
    },
    {
      id: 'social',
      title: 'Social (S)',
      questions: [
        {
          id: 'social-1',
          text: 'I enjoy helping my friends with their problems.',
          options,
        },
        {
          id: 'social-2',
          text: 'I like participating in community service activities.',
          options,
        },
      ],
    },
    {
      id: 'enterprising',
      title: 'Enterprising (E)',
      questions: [
        {
          id: 'enterprising-1',
          text: 'I enjoy leading group projects in school.',
          options,
        },
        {
          id: 'enterprising-2',
          text: 'I like organising events and activities.',
          options,
        },
      ],
    },
    {
      id: 'conventional',
      title: 'Conventional (C)',
      questions: [
        {
          id: 'conventional-1',
          text: 'I enjoy working with numbers and data.',
          options,
        },
        {
          id: 'conventional-2',
          text: 'I like following a set schedule and routine.',
          options,
        },
      ],
    },
  ],
};
