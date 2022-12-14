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
const UilShutterAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M22,11a1,1,0,0,1,0-.16c0-.28-.08-.56-.13-.84v0A9.54,9.54,0,0,0,21,7.62v0A10,10,0,0,0,14,2.21h0l-.84-.13-.16,0-.29,0h-.08L12,2c-.34,0-.68,0-1,0l-.16,0L10,2.2h0A10,10,0,0,0,2.21,10v0c-.05.28-.09.56-.13.84a1,1,0,0,1,0,.16c0,.33,0,.67,0,1s0,.68,0,1a1,1,0,0,1,0,.16c0,.28.08.56.13.84v0A9.54,9.54,0,0,0,3,16.38v0A10,10,0,0,0,10,21.79h0l.84.13L11,22l.34,0h.14c.18,0,.35,0,.53,0,.34,0,.68,0,1-.05l.16,0L14,21.8h0A10,10,0,0,0,21.79,14v0c.05-.28.09-.56.13-.84A1,1,0,0,1,22,13c0-.33.05-.67.05-1S22,11.32,22,11Zm-8.84-6.9.5.07h0A8,8,0,0,1,18.24,7H11.42Zm-2.74.08h0l.4-.06L7.38,10,5.7,7.08A8,8,0,0,1,10.37,4.17ZM4.59,15a8,8,0,0,1-.42-1.37v0c0-.22-.08-.45-.1-.68a.5.5,0,0,1,0-.12,8.22,8.22,0,0,1,0-1.62.5.5,0,0,1,0-.12c0-.23.06-.46.1-.68v0A7.76,7.76,0,0,1,4.55,9.1L8,15Zm6.3,4.91-.5-.07h0A8,8,0,0,1,5.76,17h6.82ZM10.27,15,8.54,12l1.73-3h3.46l1.73,3-1.73,3Zm3.36,4.83h0l-.4.06L16.62,14l1.68,2.92A8,8,0,0,1,13.63,19.83Zm6.33-7a.5.5,0,0,1,0,.12c0,.23-.06.46-.1.68v0a7.76,7.76,0,0,1-.38,1.27L16,9h3.37a8,8,0,0,1,.42,1.37v0c0,.22.08.45.1.68a.5.5,0,0,1,0,.12,8.22,8.22,0,0,1,0,1.62Z'
  }));
};

export default UilShutterAlt;