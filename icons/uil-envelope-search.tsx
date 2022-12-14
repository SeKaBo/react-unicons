import React from 'react';

type Props = {
    /**
     * The color of the icon
     * @default 'currentColor'
     */
    color?: string;
    /**
     * The size of the icon
     * @default 24
     */
    size?: string | number;
} & React.SVGProps<SVGElement>

/**
 * 
 * @param {string} color - The color of the icon. Defaults to 'currentColor'.
 * @param {string | number} size - The size of the icon. Defaults to 24.
 * @param props
 * @constructor
 */
const UilEnvelopeSearch = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22.21,10.29,20.48,8.57a4.37,4.37,0,0,0,.65-2.26,4.31,4.31,0,1,0-4.32,4.32A4.37,4.37,0,0,0,19.07,10l1.72,1.73a1,1,0,0,0,1.42,0A1,1,0,0,0,22.21,10.29ZM18.45,8a2.37,2.37,0,0,1-3.27,0,2.3,2.3,0,0,1-.68-1.64A2.32,2.32,0,0,1,16.81,4a2.3,2.3,0,0,1,1.64.68,2.28,2.28,0,0,1,.68,1.63A2.3,2.3,0,0,1,18.45,8ZM20.5,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H4.5a1,1,0,0,1-1-1V9.41L9.38,15.3a3,3,0,0,0,4.24,0L15,13.88a1,1,0,0,0-1.42-1.42L12.2,13.88a1,1,0,0,1-1.4,0L4.91,8H9.5a1,1,0,0,0,0-2h-5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h14a3,3,0,0,0,3-3V15A1,1,0,0,0,20.5,14Z'
  }));
};

export default UilEnvelopeSearch;