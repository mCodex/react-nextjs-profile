import React, { Component } from 'react';

import getTranslation from '../tools/translationHelpers';

import data from '../data';

export default WrappedComponent => (
  class extends Component {
    static async getInitialProps({ req }) {
      //Getting language from user's browser
      const lang = req.headers['accept-language'].substring(0, 2);

      const translations = await getTranslation(
        lang,
        ['common'],
        'http://localhost:3000/static/locales/'
      );

      return { translations, lang };
    }
    render = () => (
      <WrappedComponent data={data} {...this.props} />
    )
  }
);
