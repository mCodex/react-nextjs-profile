import React, { Component } from 'react';
import data from '../data.js';

export default (WrappedComponent) => (
  class extends Component {
    render = () => (
      <WrappedComponent data={data} {...this.props} />
    )
  }
)
