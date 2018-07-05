import React, { PureComponent, Fragment } from 'react';

import {
  Image, Header, Flag, Button
} from 'semantic-ui-react';

import withData from '../hocs/DataProvider';
import { availableCountries, setLocale } from '../tools/i18n';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '50vh',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20
  },
  flagContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#eee',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10
  }
};

class AvatarContainer extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div style={styles.flagContainer}>
          {availableCountries.map(country => (
            <Button basic compact onClick={() => setLocale(country.locale)}>
              <Flag name={country.code} />
            </Button>
          ))}
        </div>
        <div style={styles.container}>
          <Image
            src={data.pic}
            size="small"
            circular
          />
          <Header as="h1" style={{ marginTop: 20 }}>
            {data.fullname}
          </Header>
        </div>
      </Fragment>
    );
  }
}

export default withData(AvatarContainer);
