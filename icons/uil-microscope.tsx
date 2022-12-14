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
const UilMicroscope = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M20,21.00537H14.81573a2.96355,2.96355,0,0,0,.143-.59173A8.04382,8.04382,0,0,0,20,13.00537a7.94487,7.94487,0,0,0-2.12744-5.42248l.63721-.63758a.99138.99138,0,0,0,.24121-.39062l.708-2.12207a.9997.9997,0,0,0-.24121-1.02344L17.0957,1.2876a.99874.99874,0,0,0-1.02343-.2417l-2.1211.70752a.99655.99655,0,0,0-.39062.2417L7.19824,8.35791a.9995.9995,0,0,0-.00006,1.41394L5.78223,11.1875a.99963.99963,0,0,0,0,1.41406l2.12207,2.1211a.99965.99965,0,0,0,1.41406,0l1.41406-1.41407.002.002a.99963.99963,0,0,0,1.41406,0l4.30945-4.31208A5.95544,5.95544,0,0,1,18,13.00537a6.048,6.048,0,0,1-3.45483,5.43085,2.97642,2.97642,0,0,0-5.12458.063,6.822,6.822,0,0,1-1.119-.55469A.98851.98851,0,0,0,9,17.00537a.99974.99974,0,0,0-1-1H4a1,1,0,0,0,0,2H5.33142A8.81386,8.81386,0,0,0,9.04779,20.478a2.95521,2.95521,0,0,0,.13654.5274H4a1,1,0,0,0,0,2H20a1,1,0,0,0,0-2ZM8.61133,12.60156l-.708-.707.708-.70752.707.70752Zm8.31738-6.90332L11.44141,11.189l-2.12207-2.124,5.48828-5.48877,1.31152-.4375,1.24707,1.24756ZM12,21.00537a1,1,0,1,1,1-1A1.001,1.001,0,0,1,12,21.00537Z'
  }));
};

export default UilMicroscope;