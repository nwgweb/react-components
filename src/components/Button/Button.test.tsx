import React from 'react';
import renderer from 'react-test-renderer';

import Button from './Button';

describe('Button', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Button size={35}></Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
