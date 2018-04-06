import React from 'react';
import renderer from 'react-test-renderer';

import Description from './Description';

describe('Description component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Description />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
