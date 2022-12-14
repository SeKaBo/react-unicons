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
const UilFileSearchAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M12,20H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h5V7a3,3,0,0,0,3,3h3v1a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,11.05,2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3h7a1,1,0,0,0,0-2ZM12,5.41,14.59,8H13a1,1,0,0,1-1-1ZM7,8a1,1,0,0,0,0,2H8A1,1,0,0,0,8,8ZM21.71,20.29l-1.17-1.16A3.44,3.44,0,0,0,20,15h0A3.49,3.49,0,0,0,14,17.49a3.46,3.46,0,0,0,5.13,3.05l1.16,1.17a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Zm-3.17-1.75a1.54,1.54,0,0,1-2.11,0A1.5,1.5,0,0,1,16,17.49a1.46,1.46,0,0,1,.44-1.06,1.48,1.48,0,0,1,1-.43A1.47,1.47,0,0,1,19,17.49,1.5,1.5,0,0,1,18.54,18.54ZM13,12H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm-2,6a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z'
  }));
};

export default UilFileSearchAlt;