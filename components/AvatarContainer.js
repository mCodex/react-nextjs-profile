import React, { PureComponent, Fragment } from 'react';

import { Image, Header, Flag, Button } from 'semantic-ui-react';

import withData from '../hocs/DataProvider';

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
  constructor(props) {
    super(props);
    this.t = props.t;
  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div style={styles.flagContainer}>
          {data.i18n.map(country =>
            (
              <Button
                basic
                compact
              >
                <Flag name={country} />
              </Button>
           ))
        }
        </div>
        <div style={styles.container}>
          <Image
            src={data.pic}
            size="small"
            circular
          />
          <Header as="h1" style={{ marginTop: 20 }}>{data.fullname}</Header>
        </div>
      </Fragment>
    );
  }
}

export default withData(AvatarContainer);
