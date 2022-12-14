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
const UilSnowflakeAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M4.93,17.66a1,1,0,1,0,1.41,0A1,1,0,0,0,4.93,17.66ZM19.07,6.34a1,1,0,1,0-1.41,0A1,1,0,0,0,19.07,6.34Zm-12.73,0a1,1,0,1,0-1.41,0A1,1,0,0,0,6.34,6.34ZM17.66,17.66a1,1,0,1,0,1.41,0A1,1,0,0,0,17.66,17.66ZM21,11H19.41l1.3-1.29a1,1,0,0,0-1.42-1.42L16.59,11H14.41l2.3-2.29a1,1,0,1,0-1.42-1.42L13,9.59V7.41l2.71-2.7a1,1,0,1,0-1.42-1.42L13,4.59V3a1,1,0,0,0-2,0V4.59L9.71,3.29A1,1,0,0,0,8.29,4.71L11,7.41V9.59L8.71,7.29A1,1,0,1,0,7.29,8.71L9.59,11H7.41L4.71,8.29A1,1,0,0,0,3.29,9.71L4.59,11H3a1,1,0,0,0,0,2H4.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L7.41,13H9.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L11,14.41v2.18l-2.71,2.7a1,1,0,0,0,1.42,1.42L11,19.41V21a1,1,0,0,0,2,0V19.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13,16.59V14.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L14.41,13h2.18l2.7,2.71a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L19.41,13H21a1,1,0,0,0,0-2Z'
  }));
};

export default UilSnowflakeAlt;