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
const UilWindy = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M17,15a1.73,1.73,0,0,1-.86-.23,3.11,3.11,0,0,0-3.27,0,1.73,1.73,0,0,1-1.73,0,3.11,3.11,0,0,0-3.27,0A1.74,1.74,0,0,1,7,15a1,1,0,0,0,0,2,3.72,3.72,0,0,0,1.9-.52,1.13,1.13,0,0,1,1.2,0,3.75,3.75,0,0,0,3.8,0,1.13,1.13,0,0,1,1.2,0A3.72,3.72,0,0,0,17,17a1,1,0,0,0,0-2Zm0,4a1.73,1.73,0,0,1-.86-.23,3.11,3.11,0,0,0-3.27,0,1.73,1.73,0,0,1-1.73,0,3.11,3.11,0,0,0-3.27,0A1.74,1.74,0,0,1,7,19a1,1,0,0,0,0,2,3.72,3.72,0,0,0,1.9-.52,1.13,1.13,0,0,1,1.2,0,3.75,3.75,0,0,0,3.8,0,1.13,1.13,0,0,1,1.2,0A3.72,3.72,0,0,0,17,21a1,1,0,0,0,0-2ZM18.42,7.21A7,7,0,0,0,5.06,9.11,4,4,0,0,0,2,13a4,4,0,0,0,1.34,3,1,1,0,0,0,.66.25,1,1,0,0,0,.75-.35,1,1,0,0,0-.09-1.41A1.93,1.93,0,0,1,4,13a2,2,0,0,1,2-2,1,1,0,0,0,1-1,5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.66A3,3,0,0,1,20,12a2.93,2.93,0,0,1-.74,2,1,1,0,1,0,1.48,1.33A4.91,4.91,0,0,0,22,12,5,5,0,0,0,18.42,7.21Z'
  }));
};

export default UilWindy;