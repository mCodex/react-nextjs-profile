import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import ReactGA from 'react-ga';

import { Grid } from 'semantic-ui-react';
import { initI18n } from '../tools/i18n';

import Interests from '../components/Interests';
import AvatarContainer from '../components/AvatarContainer';
import Skills from '../components/Skills';
import Description from '../components/Description';
import Footer from '../components/Footer';

import withData from '../hocs/DataProvider';

class Homepage extends Component {
  constructor(props) {
    super(props);
    const { lang, data: { gaTrackingId } } = this.props;

    initI18n(lang);

    // Google Analytics setup
    if (gaTrackingId) {
      ReactGA.initialize(gaTrackingId);
    }
  }

  componentDidMount() {
    const { data: { gaTrackingId } } = this.props;
    if (gaTrackingId) {
      ReactGA.pageview(window.location.pathname, { title: 'Profile' });
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css" />
        </Head>
        <AvatarContainer />
        <Grid
          stackable
          columns={3}
          divided
        >
          <Grid.Column width={9}>
            <Description />
          </Grid.Column>
          <Grid.Column width={3}>
            <Skills />
          </Grid.Column>
          <Grid.Column width={4}>
            <Interests />
          </Grid.Column>
        </Grid>
        <Footer />
      </Fragment>
    );
  }
}

export default withData(Homepage);
