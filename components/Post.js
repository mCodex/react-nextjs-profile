import React, { Component, Fragment } from 'react';
import { translate } from 'react-i18next';

import { Image, Header } from 'semantic-ui-react';

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
    flexDirection: 'column'
  }
};

class PictureContainer extends Component {
  constructor(props) {
    super(props);
    this.t = props.t;
  }

  render() {
    const { data } = this.props;
    return (
      <Fragment>
        <div style={styles.container}>
          <Image
            src={data.pic}
            size="small"
            circular
          />
          <Header as="h1" style={{ marginTop: 20 }}>{data.fullname}</Header>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
      </Fragment>
    );
  }
}

export default withData(translate(['namespace1'])(PictureContainer));
