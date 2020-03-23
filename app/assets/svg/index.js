/* eslint-disable react/prop-types */
import React from 'react';

export const SuccessSvg = (
  props = { color: '#ff0000', width: 30, height: 30 },
) => {
  const { color, width, height } = props;
  return (
    <svg
      viewBox="0 0 82 82"
      version="1.1"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="draft"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="material-1" transform="translate(-643.000000, -902.000000)">
          <g id="success-icon" transform="translate(643.000000, 902.000000)">
            <g>
              <path
                d="M31.1230601,35.2230601 L31.1230601,51.6230601"
                id="Line-6"
                stroke={color}
                strokeWidth="7"
                strokeLinecap="square"
                fillRule="nonzero"
                transform="translate(31.123060, 43.423060) rotate(-45.000000) translate(-31.123060, -43.423060) "
              />
              <path
                d="M33.1642225,34.7381448 L84.4142225,34.7381448"
                id="Line-7"
                stroke={color}
                strokeWidth="7"
                strokeLinecap="square"
                fillRule="nonzero"
                transform="translate(58.789223, 34.738145) rotate(-45.000000) translate(-58.789223, -34.738145) "
              />
              <path
                d="M69.0832668,11.1279381 L64.7321384,15.4790664 C58.510147,9.69057653 50.1685465,6.15 41,6.15 C21.7528765,6.15 6.15,21.7528765 6.15,41 C6.15,60.2471235 21.7528765,75.85 41,75.85 C60.2471235,75.85 75.85,60.2471235 75.85,41 C75.85,37.7815821 75.4137275,34.6650611 74.5970952,31.7063499 L79.482172,26.8212731 C81.110718,31.2398005 82,36.0160488 82,41 C82,63.6436747 63.6436747,82 41,82 C18.3563253,82 0,63.6436747 0,41 C0,18.3563253 18.3563253,0 41,0 C51.8668444,0 61.7462687,4.22764806 69.0832668,11.1279381 Z"
                id="Combined-Shape"
                fill={color}
                fillRule="nonzero"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
