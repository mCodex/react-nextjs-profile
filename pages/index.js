import React, { Component, Fragment } from 'react';
import { I18nextProvider } from 'react-i18next';
import Head from 'next/head';

import startI18n from '../tools/startI18n';
import { getTranslation } from '../tools/translationHelpers';

import Title from '../components/Title';
import Post from '../components/Post';
import Skills from '../components/Skills';

export default class Homepage extends Component {
  static async getInitialProps({ req }) {
    //Getting language from user's browser
    const lang = req.headers['accept-language'].substring(0, 2);

    console.log(lang);
    const translations = await getTranslation(
      lang,
      ['common', 'namespace1'],
      'http://localhost:3000/static/locales/'
    );

    return { translations };
  }

  constructor(props) {
    super(props);

    this.i18n = startI18n(props.translations, lang);
  }

  render(props) {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Fragment>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
          </Head>
          {/* <Title /> */}
          <Post />
          <Skills />
        </Fragment>
      </I18nextProvider>
    );
  }
}
