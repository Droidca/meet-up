import React from 'react';
import { shallow } from 'enzyme';
import EventNumber from '../EventNumber';

describe('<EventNumber /> component', () => {

  let EventNumberWrapper;
  beforeAll(() => {
    EventNumberWrapper = shallow(<EventNumber />);
  });

  test('Display default number of events', () => {
    expect(EventNumberWrapper.find('.eventNumber')).toHaveLength(1);
  });

  test('Display input number of events', () => {
    EventNumberWrapper.setState({ numberOfEvents: '32' });
    EventNumberWrapper.find('.inputEventNumber').simulate('change', { target: { value: '5' } });
    expect(EventNumberWrapper.state('numberOfEvents')).toEqual('5');
  });

})