import React, { Component, Fragment } from 'react';
import { I18nextProvider } from 'react-i18next';
import Head from 'next/head';
import ReactGA from 'react-ga';

import startI18n from '../tools/startI18n';
import getTranslation from '../tools/translationHelpers';

import Interests from '../components/Interests';
import AvatarContainer from '../components/AvatarContainer';
import Skills from '../components/Skills';

import withData from '../hocs/DataProvider';

class Homepage extends Component {
  static async getInitialProps({ req }) {
    //Getting language from user's browser
    const lang = req.headers['accept-language'].substring(0, 2);

    const translations = await getTranslation(
      lang,
      ['common', 'namespace1'],
      'http://localhost:3000/static/locales/'
    );

    return { translations, lang };
  }

  constructor(props) {
    super(props);
    this.i18n = startI18n(props.translations, this.props.lang);

    // Google Analytics setup
    const { gaTrackingId } = this.props.data;
    ReactGA.initialize(gaTrackingId);
  }

  componentDidMount() {
    ReactGA.pageview(window.location.pathname, { title: 'Profile' });
  }

  render() {
    return (
      <I18nextProvider i18n={this.i18n}>
        <Fragment>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
          </Head>
          {/* <Title /> */}
          <AvatarContainer />
          <Skills />
          <Interests />
        </Fragment>
      </I18nextProvider>
    );
  }
}

export default withData(Homepage);
