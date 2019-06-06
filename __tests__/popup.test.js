import React, { Component } from 'react';
import {mount, shallow} from 'enzyme'
import ItemView from "../src/ItemView.jsx";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });




describe('ItemView', () => {
  it('is open', () => {
    const exampleData = {fields : 'null', classifications : 'null'}
	const wrapper = shallow(
		<ItemView
		  onClose={null}
		  open={true}
		  modalData={exampleData}
	    />
	   ); 
	expect(wrapper.prop('open')).toBe(true)
  });
});
//.equal(true);