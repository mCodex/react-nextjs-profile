import React, { PureComponent, Fragment } from 'react';
import { List, Grid } from 'semantic-ui-react';

import withData from '../hocs/DataProvider';
import { Translate } from '../tools/i18n';

class Interests extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <Grid stackable>
          <List>
            <List.Header as="h2">
              <Translate value="profile.interests" />
            </List.Header>
            {data.interests.map(interest => (
              <List.Item>
                {interest}
              </List.Item>
            ))
            }
          </List>
        </Grid>
      </Fragment>
    );
  }
}

export default withData(Interests);
