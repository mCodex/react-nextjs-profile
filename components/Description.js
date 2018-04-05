import React, { PureComponent } from 'react';

import { Header, Container } from 'semantic-ui-react';

import withData from '../hocs/DataProvider';

class Description extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Container
        fluid
        text
      >
        <Header as="h2">Description</Header>
        <p>{data.description}</p>
      </Container>
    );
  }
}

export default withData(Description);
