import React from 'react';
import renderer from 'react-test-renderer';

import AvatarContainer from './AvatarContainer';

describe('AvatarContainer component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<AvatarContainer />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
