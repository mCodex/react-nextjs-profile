import React, { PureComponent, Fragment } from 'react';
import { List, Grid } from 'semantic-ui-react';
import { translate } from 'react-i18next';

import withData from '../hocs/DataProvider';

class Interests extends PureComponent {
  render() {
    const { data, t } = this.props;
    return (
      <Fragment>
        <Grid stackable>
          <List>
            <List.Header as="h2">{t('Interests')}</List.Header>
            {data.interests.map(interest =>
              <List.Item>{interest}</List.Item>)
            }
          </List>
        </Grid>
      </Fragment>
    );
  }
}

export default withData(translate(['common'])(Interests));
