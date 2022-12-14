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
const UilSkypeAlt = ({ color = 'currentColor', size = 24, ...props }: Props) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...props
  }, React.createElement('path', {
    d: 'M15.13916,11.8125a5.07559,5.07559,0,0,0-1.291-.59277c-.27978-.0846-.58953-.16736-.9104-.24713-.27911-.07782-.61132-.15766-1.02221-.248a9.31489,9.31489,0,0,1-1.436-.42383,1.49588,1.49588,0,0,1-.61572-.44726.84285.84285,0,0,1-.15918-.56543.96712.96712,0,0,1,.2041-.59668,1.59829,1.59829,0,0,1,.69971-.47559A4.01235,4.01235,0,0,1,12.03223,8a3.78727,3.78727,0,0,1,1.10547.14648,2.08274,2.08274,0,0,1,.66357.32129,1.23492,1.23492,0,0,1,.32519.34278.9997.9997,0,1,0,1.76075-.94727,3.14668,3.14668,0,0,0-.83741-.958A4.006,4.006,0,0,0,13.731,6.23633,5.76768,5.76768,0,0,0,12.03223,6a5.96329,5.96329,0,0,0-2.145.35059A3.55209,3.55209,0,0,0,8.30908,7.49121a2.97709,2.97709,0,0,0-.60449,1.79688,2.839,2.839,0,0,0,.58008,1.792,3.50074,3.50074,0,0,0,1.438,1.07226,10.5822,10.5822,0,0,0,1.30706.4079c.00837.00275.014.00946.02253.012.1914.05761.49755.13476.93994.23046.17236.037.33478.07789.49713.11847.01575.0047.03851.00965.05365.01435l.01807.00274c.24835.0633.48706.12873.70556.1955a3.02336,3.02336,0,0,1,.76367.34375,1.12652,1.12652,0,0,1,.36231.36816,1.20138,1.20138,0,0,1,.11865.585,1.15187,1.15187,0,0,1-.21387.73243,1.76331,1.76331,0,0,1-.80273.585A3.78736,3.78736,0,0,1,12.0083,16a3.68851,3.68851,0,0,1-1.70361-.34375,1.75626,1.75626,0,0,1-.61573-.54687,1.0164,1.0164,0,0,1-.20166-.50293,1,1,0,0,0-2,0,2.93957,2.93957,0,0,0,.55616,1.63867,3.7737,3.7737,0,0,0,1.34179,1.1875A5.621,5.621,0,0,0,12.0083,18a5.7083,5.7083,0,0,0,2.25391-.40527,3.71019,3.71019,0,0,0,1.665-1.27246,3.14637,3.14637,0,0,0,.58349-1.92676,3.08942,3.08942,0,0,0-.375-1.53028A3.16532,3.16532,0,0,0,15.13916,11.8125Zm7.22217,1.87891A10.49127,10.49127,0,0,0,10.30859,1.63867a6.499,6.499,0,0,0-8.66992,8.66992A10.49127,10.49127,0,0,0,13.69141,22.36133a6.499,6.499,0,0,0,8.66992-8.66992ZM16.5,21a4.5057,4.5057,0,0,1-2.16943-.55762,1.0038,1.0038,0,0,0-.67725-.10644A8.49212,8.49212,0,0,1,3.5,12a8.58284,8.58284,0,0,1,.16406-1.6543A1.00336,1.00336,0,0,0,3.55811,9.669,4.49939,4.49939,0,0,1,9.66943,3.55762a.99964.99964,0,0,0,.67725.10644A8.49212,8.49212,0,0,1,20.5,12a8.58284,8.58284,0,0,1-.16406,1.6543,1.00336,1.00336,0,0,0,.106.67675A4.49869,4.49869,0,0,1,16.5,21Z'
  }));
};

export default UilSkypeAlt;