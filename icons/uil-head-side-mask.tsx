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
const UilHeadSideMask = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M13.23047,2.00342A7.36652,7.36652,0,0,0,7.77734,4.11719,7.44119,7.44119,0,0,0,5.5,9.46533L3.65625,12.46289a.995.995,0,0,0-.15625.52v.04053a.99952.99952,0,0,0,.07031.34668l1.43946,3.87256c.01269.03418.02734.06689.043.09912A2.9843,2.9843,0,0,0,7.73633,19H8.5v2a1,1,0,0,0,2,0V19h1.99689l.00311.00049a.99907.99907,0,0,0,.32129-.05371l3.70026-1.25623a.99865.99865,0,0,0,.01751.12049l1,3.4663a1.00148,1.00148,0,0,0,.96094.72315,1.01777,1.01777,0,0,0,.27734-.03955,1.00043,1.00043,0,0,0,.6836-1.23828l-.92383-3.2002,1.92969-7.26611A1.03147,1.03147,0,0,0,20.5,10V9.77246A7.698,7.698,0,0,0,13.23047,2.00342ZM11.5,17H7.73633a.99477.99477,0,0,1-.874-.51318L5.93848,14H11.5Zm5.523-1.59137-3.523,1.196V13.72089l4.34479-1.44831Zm1.41211-5.38843a.973.973,0,0,0-.25147.03107L12.3374,12H6.28906l1.07422-1.74658a.99913.99913,0,0,0,.14746-.562c0-.01026-.00976-.18116-.01074-.19141A5.45491,5.45491,0,0,1,9.16992,5.55273a5.52222,5.52222,0,0,1,4-1.55029A5.6849,5.6849,0,0,1,18.5,9.77246Z'
  }));
};

export default UilHeadSideMask;