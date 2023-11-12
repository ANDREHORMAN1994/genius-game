export interface IButtonColors {
  color: string;
  position: string;
  rounded: string;
  soundUrl: string;
  imgUrlOff: string;
  imgUrlOn: string;
  imgAlt: string;
}

export const BTN_COLORS: IButtonColors[] = [
  {
    color: 'blue',
    position: 'absolute -top-8 -left-8',
    rounded: 'rounded-tl-full',
    soundUrl: '/sounds/btn-blue.mp3',
    imgUrlOff: '/images/Simon-blue-off.png',
    imgUrlOn: '/images/Simon-blue-on.png',
    imgAlt: 'Botão azul',
  },
  {
    color: 'green',
    position: 'absolute -bottom-8 -right-8',
    rounded: 'rounded-br-full',
    soundUrl: '/sounds/btn-green.mp3',
    imgUrlOff: '/images/Simon-green-off.png',
    imgUrlOn: '/images/Simon-green-on.png',
    imgAlt: 'Botão verde',
  },
  {
    color: 'red',
    position: 'absolute -bottom-8 -left-8',
    rounded: 'rounded-bl-full',
    soundUrl: '/sounds/btn-red.mp3',
    imgUrlOff: '/images/Simon-red-off.png',
    imgUrlOn: '/images/Simon-red-on.png',
    imgAlt: 'Botão vermelho',
  },
  {
    color: 'yellow',
    position: 'absolute -top-8 -right-8',
    rounded: 'rounded-tr-full',
    soundUrl: '/sounds/btn-yellow.mp3',
    imgUrlOff: '/images/Simon-yellow-off.png',
    imgUrlOn: '/images/Simon-yellow-on.png',
    imgAlt: 'Botão amarelo',
  },
];
