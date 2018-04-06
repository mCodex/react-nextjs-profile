import React, { Component } from 'react';

import data from '../data';

export default WrappedComponent => (
  class extends Component {
    static async getInitialProps({ req }) {
      //Getting language from user's browser
      const lang = req.headers['accept-language'].substring(0, 2);

      return { lang };
    }
    render = () => (
      <WrappedComponent data={data} {...this.props} />
    )
  }
);
