import React from 'react';
import './index.scss';

const Icon = ({ type, style }) => {
  const src = `https://zqran.gitee.io/images/ka/${type}.svg`
  return <img src={src} alt="" style={style}/>
}

export default Icon;