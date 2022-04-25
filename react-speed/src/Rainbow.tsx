import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import './App.css';
import styles from './Rainbow.module.scss';

const rainbowColor = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];

type Props = {
  start: boolean;
  index: number;
};
const cx = classNames.bind(styles);
function Rainbow({ start, index }: Props) {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        if (index === 0) {
          console.time();
        } else if (index === 5000) {
          console.timeEnd();
        }
        setColor(rainbowColor[index % 7]);
      }, 1);
    }
  }, [start, index]);
  return <div className={cx(styles.wrap, styles[color])}></div>;
}

export default Rainbow;
