export const PhoneColors = {
  spacegray: '#4B4A48',
  midnight: '#010101',
  midnightgreen: '#3A443C',
  rosegold: '#EBC2BC',
  black: '#111111',
  silver: '#E7E7DF',
  gold: '#FBD9BE',
  coral: '#F85C46',
  yellow: '#FBE27D',
  white: '#FFFFFF',
  red: '#D52941',
  green: '#A0D4BE',
  purple: '#CBC4D6',
} as const;

export type PhoneColor = keyof typeof PhoneColors;
