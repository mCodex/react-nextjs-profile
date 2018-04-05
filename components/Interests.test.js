import React from 'react';
import renderer from 'react-test-renderer';

import Interests from './Interests';

describe('Interests component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Interests />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
