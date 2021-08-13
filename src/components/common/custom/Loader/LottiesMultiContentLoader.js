import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../../lotties/multiContentLoader.json';

class LottiesMultiContentLoader extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} height={'auto'} width={'100%'} />
      </div>
    );
  }
}

export default LottiesMultiContentLoader;
