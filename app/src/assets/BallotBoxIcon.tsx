import Icon from '@ant-design/icons';
import React from 'react';

const BallotBoxSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 84 67">
    <path
      d="M 40.559 0.729 L 62.334 10.882 C 62.768 11.085 62.952 11.598 62.753 12.029 L 54.366 30.015 L 49.749 30.015 L 57.282 13.859 C 57.484 13.427 57.296 12.912 56.864 12.709 L 42.4 5.965 C 42.114 5.834 41.771 5.957 41.637 6.247 L 30.554 30.015 L 25.972 30.015 C 25.984 29.96 26.005 29.902 26.032 29.848 L 39.415 1.147 C 39.616 0.716 40.128 0.527 40.559 0.729 Z M 22.716 28.668 L 58.873 28.666 C 59.416 28.666 59.85 29.107 59.846 29.649 L 59.827 31.779 C 59.822 32.321 59.38 32.759 58.838 32.759 L 22.682 32.761 C 22.139 32.761 21.703 32.323 21.708 31.78 L 21.726 29.651 C 21.729 29.108 22.174 28.668 22.716 28.668 Z"/>
    <path
      style={{ stroke: 'currentColor', strokeLinejoin: 'round', strokeLinecap: 'round', strokeWidth: 5, fill: 'none' }}
      d="M 57.221 19.904 L 66.294 19.829 L 80.871 44.106 C 80.92 44.325 3.047 44.325 3.021 44.325 L 2.92 73.986 C 2.92 73.986 80.708 74.007 80.82 73.742 L 80.92 44.325 M 3.039 43.646 L 17.615 20.177 L 32.321 20.087"
    />
  </svg>
);
export const BallotBoxIcon = (props: any) => (<Icon component={BallotBoxSvg} {...props} />);

