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
const UilSocialDistancing = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M8.5,17H5.91406l.293-.293A.99989.99989,0,0,0,4.793,15.293l-1.9997,1.99969a1.00354,1.00354,0,0,0,0,1.41468L4.793,20.707A.99989.99989,0,0,0,6.207,19.293L5.91406,19H8.5a1,1,0,0,0,0-2Zm12.70673.29266L19.207,15.293A.99989.99989,0,0,0,17.793,16.707l.293.293H15.5a1,1,0,0,0,0,2h2.58594l-.293.293A.99989.99989,0,1,0,19.207,20.707l1.9997-1.99969a1.00354,1.00354,0,0,0,0-1.41468Zm-.56647-7.52087A3.46849,3.46849,0,0,0,21.5,7.5a3.5,3.5,0,0,0-7,0,3.46849,3.46849,0,0,0,.85974,2.27179A4.98821,4.98821,0,0,0,13,14a1,1,0,0,0,2,0,3,3,0,0,1,6,0,1,1,0,0,0,2,0A4.98821,4.98821,0,0,0,20.64026,9.77179ZM18,9a1.5,1.5,0,1,1,1.5-1.5A1.50164,1.50164,0,0,1,18,9Zm-9.35974.77179A3.46849,3.46849,0,0,0,9.5,7.5a3.5,3.5,0,0,0-7,0,3.46849,3.46849,0,0,0,.85974,2.27179A4.98821,4.98821,0,0,0,1,14a1,1,0,0,0,2,0,3,3,0,0,1,6,0,1,1,0,0,0,2,0A4.98821,4.98821,0,0,0,8.64026,9.77179ZM6,9A1.5,1.5,0,1,1,7.5,7.5,1.50164,1.50164,0,0,1,6,9Z'
  }));
};

export default UilSocialDistancing;