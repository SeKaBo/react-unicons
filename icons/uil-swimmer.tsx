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
const UilSwimmer = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,9.28a2,2,0,1,0-2-2A2,2,0,0,0,17,9.28ZM2.71,13.92a3,3,0,0,1,.57.25,4.06,4.06,0,0,0,4.1,0,2.62,2.62,0,0,1,2.56,0l.21.1,0,0a4.14,4.14,0,0,0,3.87-.13,2.62,2.62,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,4,4,0,0,0,2-.56,3,3,0,0,1,.57-.25A1,1,0,1,0,20.71,12a4.82,4.82,0,0,0-1,.44,2.1,2.1,0,0,1-2.1,0,4.62,4.62,0,0,0-4.54,0,2.52,2.52,0,0,1-.29.12L14.34,11a.75.75,0,0,0,.09-.15,1,1,0,0,0,.12-.16,1.29,1.29,0,0,0,0-.19,1.06,1.06,0,0,0,0-.19,1.13,1.13,0,0,0,0-.18,1.06,1.06,0,0,0,0-.19,1.51,1.51,0,0,0-.1-.17.7.7,0,0,0-.1-.16L11.28,6.28s0,0,0,0A1.1,1.1,0,0,0,11,6.06a.8.8,0,0,0-.21,0,.53.53,0,0,0-.17,0A.89.89,0,0,0,10.2,6L6.66,7.32a1,1,0,0,0-.6,1.28,1,1,0,0,0,1.28.6l2.93-1.07,2,2.12-1.9,1.9a4.62,4.62,0,0,0-3.94.28,2.1,2.1,0,0,1-2.1,0,4.82,4.82,0,0,0-1-.44,1,1,0,1,0-.58,1.91Zm18,3.09a4.82,4.82,0,0,0-1,.44,2.1,2.1,0,0,1-2.1,0,4.62,4.62,0,0,0-4.54,0,2.11,2.11,0,0,1-2.12,0,4.62,4.62,0,0,0-4.54,0,2.1,2.1,0,0,1-2.1,0,4.82,4.82,0,0,0-1-.44,1,1,0,1,0-.58,1.91,3,3,0,0,1,.57.25,4.06,4.06,0,0,0,4.1,0,2.62,2.62,0,0,1,2.56,0,4.15,4.15,0,0,0,4.12,0,2.62,2.62,0,0,1,2.56,0,4.25,4.25,0,0,0,2.08.56,4,4,0,0,0,2-.56,3,3,0,0,1,.57-.25A1,1,0,1,0,20.71,17Z'
  }));
};

export default UilSwimmer;