import React, { Component, Fragment } from 'react';
import { translate } from 'react-i18next';

import { Image, Header } from 'semantic-ui-react';

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
    return (
      <Fragment>
        <div style={styles.container}>
          <Image
            src="https://media.licdn.com/dms/image/C4D03AQHMLA36yoJdtA/profile-displayphoto-shrink_800_800/0?e=1527559200&v=alpha&t=HKVP9xX7zNrlsLClwawLTusZ3CgQxcUlE7gfpSL4A5o"
            size="small"
            circular
          />
          <Header as="h1" style={{ marginTop: 20 }}>Mateus Andrade</Header>
        </div>
        <div>
          <p>
          Hi there, my name is Mateus! I'm a brazilian developer working with web & mobile
          </p>
        </div>
      </Fragment>
    );
  }
}

export default translate(['namespace1'])(PictureContainer);
