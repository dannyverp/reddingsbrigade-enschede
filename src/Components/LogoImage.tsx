import React, {FC, HTMLAttributes} from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
    collapsed?: boolean;
    className?: string;
}

export const LogoImage: FC<Props> = ({className = '', collapsed = false}) => {
    return <>
        <svg
            version="1.1"
            id="Laag_1"
            x="0px" y="0px"
            viewBox={'0 0 ' + (collapsed ? '69.17' : '509.19601') + ' 93.74'}
            xmlSpace="preserve"
            className={'fill-current ' + className}>
            <g id="g74" transform="translate(0,7.9999962)">
                <g id={'R'}>
                    <g id={'crown'}>
                        <path
                            d="M 16.274,55.188 H 0 C 2.025,70.842 14.417,83.235 30.071,85.26 V 68.983 C 23.284,67.315 17.945,61.977 16.274,55.188"
                            id="path62"/>
                        <path
                            d="m 34.899,0.621 c -0.167,0.165 -0.439,0.165 -0.604,0 l -3.946,-3.948 c -0.166,-0.164 -0.166,-0.436 0,-0.601 l 3.946,-3.947 c 0.166,-0.167 0.438,-0.167 0.604,0 l 3.946,3.947 c 0.164,0.165 0.164,0.437 0,0.601 z"
                            id="path64"/>
                        <path
                            d="m 49.419,17.892 c -0.235,0.092 -0.465,0.13 -0.795,0.13 h -0.006 c -0.814,0.063 -1.523,-0.359 -1.995,-0.628 -0.476,-0.265 -1.065,-0.527 -1.676,-0.527 -0.608,0 -1.302,0.298 -1.672,0.527 -0.76,0.474 -1.014,0.628 -1.69,0.628 -0.812,0.063 -1.52,-0.359 -1.994,-0.628 -0.474,-0.265 -1.065,-0.527 -1.676,-0.527 -0.608,0 -1.302,0.298 -1.672,0.527 -0.76,0.474 -1.014,0.628 -1.69,0.628 -0.678,0 -0.93,-0.154 -1.69,-0.628 -0.369,-0.229 -1.065,-0.527 -1.674,-0.527 -0.608,0 -1.2,0.263 -1.674,0.527 -0.476,0.269 -1.183,0.69 -1.993,0.628 -0.676,0 -0.93,-0.154 -1.692,-0.628 -0.369,-0.229 -1.062,-0.527 -1.672,-0.527 -0.608,0 -1.2,0.263 -1.675,0.527 -0.472,0.269 -1.182,0.69 -1.994,0.628 h -0.007 c -0.329,0 -0.559,-0.038 -0.797,-0.13 L 14.092,9.902 C 12.641,7.831 13.144,4.974 15.215,3.524 17.288,2.073 20.143,2.578 21.594,4.651 l 4.652,6.636 c 1.232,-0.303 2.477,-0.532 3.729,-0.7 V 6.992 c 0,-2.528 2.05,-4.577 4.579,-4.577 2.528,0 4.578,2.049 4.578,4.577 v 3.571 c 1.257,0.163 2.508,0.392 3.745,0.69 L 47.512,4.65 c 1.45,-2.073 4.307,-2.578 6.379,-1.127 2.071,1.45 2.572,4.307 1.123,6.378 z"
                            id="path66"/>
                        <path
                            d="m 27.586,21.023 c -0.668,0 -0.922,-0.152 -1.675,-0.624 -0.366,-0.229 -1.055,-0.521 -1.659,-0.521 -0.603,0 -1.189,0.258 -1.659,0.521 -0.47,0.267 -1.174,0.685 -1.979,0.624 h -0.009 c -0.667,0 -0.92,-0.152 -1.674,-0.624 -0.224,-0.14 -0.573,-0.296 -0.946,-0.402 C 8.358,25.217 1.464,34.831 0,46.156 H 16.274 C 17.944,39.369 23.283,34.03 30.072,32.361 V 20.153 c -0.18,0.075 -0.353,0.159 -0.509,0.246 -0.47,0.267 -1.172,0.685 -1.977,0.624"
                            id="path68"/>
                        <path
                            d="m 51.172,19.985 c -0.388,0.107 -0.753,0.271 -0.985,0.414 -0.753,0.472 -1.005,0.624 -1.676,0.624 h -0.009 c -0.803,0.061 -1.506,-0.357 -1.977,-0.624 -0.47,-0.263 -1.056,-0.521 -1.659,-0.521 -0.604,0 -1.292,0.292 -1.659,0.521 -0.753,0.472 -1.007,0.624 -1.676,0.624 -0.805,0.061 -1.506,-0.357 -1.977,-0.624 -0.14,-0.079 -0.294,-0.154 -0.452,-0.225 V 32.361 C 45.891,34.03 51.23,39.369 52.9,46.156 H 69.174 C 67.709,34.823 60.808,25.205 51.172,19.985"
                            id="path70"/>
                    </g>
                    <path
                        d="m 48.608,66.836 h 2.273 c 2.778,0 6.298,-0.098 6.298,-3.755 0,-3.014 -3.013,-3.568 -6.298,-3.568 H 48.608 Z M 39.99,53.404 h 15.383 c 5.747,0 10.423,2.583 10.423,8.149 0,4.311 -2.042,7.179 -6.207,8.156 v 0.09 c 2.78,0.746 2.964,3.196 4.586,7.134 l 3.149,8.806 H 58.338 L 56.486,79.898 C 54.724,74.346 53.609,72.95 50.414,72.95 H 48.608 V 85.739 H 39.99 Z"
                        id="path2"/>
                </g>
                {!collapsed &&
                    <g id={'eddingsbrigade'}>
                        <polygon
                            points="94.744,80.304 81.354,80.304 81.354,87.623 96.042,87.623 96.042,93.739 72.736,93.739 72.736,61.404 95.529,61.404 95.529,67.513 81.354,67.513 81.354,74.193 94.744,74.193 "
                            id="polygon34" transform="translate(0,-8)"/>
                        <path
                            d="m 111.736,79.346 h 3.334 c 6.44,0 10.054,-3.338 10.054,-9.772 0,-6.443 -3.752,-9.781 -10.054,-9.781 h -3.334 z m -8.619,-25.942 h 11.771 c 11.256,0 19.13,3.513 19.13,16.029 0,12.093 -8.106,16.306 -19.13,16.306 h -11.771 z"
                            id="path6"/>
                        <path
                            d="m 148.068,79.346 h 3.34 c 6.441,0 10.051,-3.338 10.051,-9.772 0,-6.443 -3.751,-9.781 -10.051,-9.781 h -3.34 z m -8.619,-25.942 h 11.77 c 11.255,0 19.133,3.513 19.133,16.029 0,12.093 -8.103,16.306 -19.133,16.306 h -11.77 z"
                            id="path8"/>
                        <rect x="176.26801" y="53.403999" width="8.6090002" height="32.334999" id="rect10"/>
                        <polygon
                            points="222.33,93.739 211.63,93.739 200.32,71.636 200.23,71.636 200.512,93.739 192.587,93.739 192.587,61.404 203.571,61.404 214.5,83.357 214.593,83.357 214.455,61.404 222.33,61.404 "
                            id="polygon12" transform="translate(0,-8)"/>
                        <path
                            d="m 258.361,84.813 c -5.471,1.384 -9.548,1.482 -12.511,1.482 -8.617,0 -18.577,-4.357 -18.577,-16.586 0,-12.19 8.567,-16.866 20.427,-16.866 2.135,0 6.63,0.231 9.78,1.438 l -0.697,7.038 c -2.684,-1.568 -5.831,-2.081 -7.869,-2.081 -7.002,0 -12.747,2.917 -12.747,10.471 0,6.34 4.496,10.188 10.794,10.188 1.16,0 2.277,-0.19 3.056,-0.553 V 72.95 h -5.046 v -6.114 h 13.39 z"
                            id="path26"/>
                        <path
                            d="m 265.836,77.803 c 2.213,1.216 5.295,2.144 8.843,2.147 2.714,0 5.301,-0.555 5.301,-3.164 0.011,-6.061 -15.2,-2.241 -15.196,-14.069 0.015,-7.83 7.571,-9.971 14.024,-9.967 3.088,0 6.129,0.465 8.287,1.207 l -0.558,6.71 c -2.205,-1.025 -4.694,-1.492 -7.137,-1.492 -2.162,0 -5.758,0.19 -5.765,3.027 0,5.266 15.201,1.728 15.187,13.469 -0.012,8.436 -7.004,10.71 -14.146,10.71 -3.004,0 -6.731,-0.465 -9.589,-1.396 z"
                            id="path30"/>
                        <path
                            d="m 303.919,79.623 h 2.55 c 3.155,0 6.439,-0.461 6.439,-3.755 0,-3.522 -3.375,-3.85 -6.346,-3.85 h -2.644 v 7.605 z m 0,-13.43 h 2.415 c 2.826,0 5.752,-0.704 5.752,-3.441 0,-2.96 -2.789,-3.239 -5.655,-3.239 h -2.512 z m -8.613,-12.789 h 14.875 c 6.024,0 10.516,2.646 10.516,8.193 0,4.077 -2.083,6.354 -5.694,7.559 v 0.087 c 4.31,0.88 6.525,3.202 6.525,7.138 0,7.732 -6.809,9.358 -12.598,9.358 h -13.624 z"
                            id="path28"/>
                        <path
                            d="m 335.74,66.836 h 2.264 c 2.786,0 6.311,-0.098 6.311,-3.755 0,-3.014 -3.013,-3.568 -6.311,-3.568 h -2.264 z m -8.609,-13.432 h 15.373 c 5.745,0 10.424,2.583 10.424,8.149 0,4.311 -2.037,7.179 -6.211,8.156 v 0.09 c 2.781,0.746 2.972,3.196 4.595,7.134 l 3.149,8.806 h -8.988 l -1.858,-5.841 c -1.752,-5.552 -2.867,-6.948 -6.069,-6.948 h -1.805 v 12.789 h -8.609 V 53.404 Z"
                            id="path14"/>
                        <rect x="360.51501" y="53.403999" width="8.618" height="32.334999" id="rect16"/>
                        <path
                            d="m 406.373,84.813 c -5.471,1.384 -9.541,1.482 -12.519,1.482 -8.606,0 -18.568,-4.357 -18.568,-16.586 0,-12.19 8.563,-16.866 20.431,-16.866 2.125,0 6.625,0.231 9.771,1.438 l -0.692,7.038 c -2.685,-1.568 -5.838,-2.081 -7.878,-2.081 -6.998,0 -12.745,2.917 -12.745,10.471 0,6.34 4.492,10.188 10.803,10.188 1.154,0 2.27,-0.19 3.059,-0.553 V 72.95 h -5.056 v -6.114 h 13.395 v 17.977 z"
                            id="path18"/>
                        <path
                            d="m 428.054,60.067 h -0.092 l -4.168,12.653 h 8.117 z m -5.284,-6.663 h 10.576 L 445.8,85.739 h -9.445 l -2.409,-6.904 H 421.8 l -2.546,6.904 h -8.755 z"
                            id="path20"/>
                        <path
                            d="m 458.715,79.346 h 3.332 c 6.443,0 10.058,-3.338 10.058,-9.772 0,-6.443 -3.758,-9.781 -10.058,-9.781 h -3.332 z M 450.1,53.404 h 11.762 c 11.265,0 19.136,3.513 19.136,16.029 0,12.093 -8.108,16.306 -19.136,16.306 H 450.1 Z"
                            id="path22"/>
                        <polygon
                            points="507.901,80.304 494.51,80.304 494.51,87.623 509.196,87.623 509.196,93.739 485.893,93.739 485.893,61.404 508.691,61.404 508.691,67.513 494.51,67.513 494.51,74.193 507.901,74.193 "
                            id="polygon24" transform="translate(0,-8)"/>
                    </g>
                }
            </g>
        </svg>
    </>
}