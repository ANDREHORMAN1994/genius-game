export interface IButtonColors {
  color: string;
  position: string;
  rounded: string;
}

export const BTN_COLORS: IButtonColors[] = [
  {
    color: 'blue',
    position: 'absolute -top-8 -left-8',
    rounded: 'rounded-tl-full',
  },
  {
    color: 'green',
    position: 'absolute -bottom-8 -right-8',
    rounded: 'rounded-br-full',
  },
  {
    color: 'red',
    position: 'absolute -bottom-8 -left-8',
    rounded: 'rounded-bl-full',
  },
  {
    color: 'yellow',
    position: 'absolute -top-8 -right-8',
    rounded: 'rounded-tr-full',
  },
];
