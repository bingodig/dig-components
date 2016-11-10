
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

import Helloworld from './helloworld';

//将组件渲染到DOM中
render(
  <Helloworld />,
  document.getElementById('content')
)