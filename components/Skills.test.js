import React from 'react';
import renderer from 'react-test-renderer';

import Skills from './Skills';

describe('Skills component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Skills />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
