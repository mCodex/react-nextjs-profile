import React, { PureComponent } from 'react';

import { Header, Container } from 'semantic-ui-react';

import withData from '../hocs/DataProvider';
import { Translate } from '../tools/i18n';

class Description extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Container
        fluid
        text
      >
        <Header as="h2">
          <Translate value="profile.description" />
        </Header>
        <p>
          {data.description}
        </p>
      </Container>
    );
  }
}

export default withData(Description);
