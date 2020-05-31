import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Form from '../Form';


configure({adapter: new Adapter()});

describe('Form Component', () => {
  it('Test case for onchange event', () => { 

   const wrapper = shallow(<Form />);
   expect(wrapper).toMatchSnapshot();
  })
})
