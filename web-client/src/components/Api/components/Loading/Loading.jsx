import React from 'react';
import mojs from 'mo-js';

function createCircleAnimation(size, startAngle, endAngle, width) {
  const angle = {};
  angle[startAngle] = endAngle;

  const strokeWidth = {};
  strokeWidth[width] = 0;

  const circle = new mojs.Shape({
    shape: 'circle',
    radiusX: size,
    radiusY: size,
    left: '50%',
    fill: 'none',
    radius: 20,
    stroke: { '#FFE066': '#669D31' },
    strokeWidth,
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%': '100%' },
    angle,
    duration: 2500,
    onComplete() {
      this.generate().replay();
    },
  });

  return circle;
}

function getCircles() {
  const circles = [];
  for (let i = 0; i < 4; i++) {
    const size = (i + 1) * 20;
    const angle = i * 100;
    const width = size / 6;
    circles.push(createCircleAnimation(size, angle, angle + 180, width));
  }

  return circles;
}

function playCircles(circles) {
  for (let i = 0; i < circles.length; i++) {
    circles[i].play();
  }
}

function stopCircles(circles) {
  for (let i = 0; i < circles.length; i++) {
    circles[i].stop();
  }
}

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      circles: getCircles(),
    };
  }

  componentDidMount() {
    playCircles(this.state.circles);
  }

  componentWillUnmount() {
    stopCircles(this.state.circles);
  }

  render() {
    return <div id="loading" />;
  }
}

export default Loading;
