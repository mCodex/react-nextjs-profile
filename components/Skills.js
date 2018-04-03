import React, { PureComponent, Fragment } from 'react';
import { Label, Grid } from 'semantic-ui-react';
import { sample } from 'lodash';

import withData from '../hocs/DataProvider';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue'
];

class Skills extends PureComponent {
  render() {
    return (
      <Fragment>
        <Grid stackable columns={13}>
          {this.props.data.skills.map(skill => (
            <Grid.Column>
              <Label tag color={sample(colors)}>{skill}</Label>
            </Grid.Column>))
          }
        </Grid>
      </Fragment>
    );
  }
}

export default withData(Skills);
