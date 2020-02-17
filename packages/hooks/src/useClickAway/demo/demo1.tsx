/**
 * title: Default usage
 * desc: Please click button or outside of button to show effects.
 *
 * title.zh-CN: 基本用法
 * desc.zh-CN: 请点击按钮或按钮外查看效果。
 */

import React, { useState } from 'react';
import { Button } from 'antd';
import {useClickAway} from '@wetrial/hooks';

export default () => {
  const [counter, setCounter] = useState(0);

  const ref = useClickAway(() => {
    setCounter(s => s + 1);
  });

  return (
    <div>
      <span ref={ref}>
        <Button type="primary">box1</Button>
      </span>
      <p>counter: {counter}</p>
    </div>
  );
};
