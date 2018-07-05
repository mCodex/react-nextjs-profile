
import React, { PureComponent } from 'react';

import { Container, Grid } from 'semantic-ui-react';

export default class extends PureComponent {
  render() {
    return (
      <div className="ui inverted vertical footer segment" style={{ width: '100% ', marginTop: 25 }}>
        <Container>
          <Grid>
            <Grid.Row style={{ margin: 30 }}>
              <Grid.Column textAlign="center">
                {/* eslint-disable react/jsx-one-expression-per-line*/}
                <p>Powered by <a href="https://reactjs.org/">React</a> / <a href="https://github.com/zeit/next.js/">NextJS</a>.</p>
                <p>Made with <span role="img" aria-label="heart">❤️</span> by <a href="https://github.com/mCodex">mCodex</a> & <a href="https://github.com/vspedr">vspedr</a>.</p>
                {/* eslint-enable react/jsx-one-expression-per-line*/}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
