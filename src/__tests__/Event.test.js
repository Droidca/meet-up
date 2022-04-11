import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event events={mockData} />);
  });

  test('render an event', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('render a summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render a description', () => {
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  test('render a location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render a start-time', () => {
    expect(EventWrapper.find('.startTime')).toHaveLength(1);
  });

  test('render an end-time', () => {
    expect(EventWrapper.find('.endTime')).toHaveLength(1);
  });

  test('information is colapsed', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('render details button', () => {
    expect(EventWrapper.find('.show_hide_button')).toHaveLength(1);
  });

  test('expand an event to see its details', () => {
    EventWrapper.setState({ collapsed: true });
    EventWrapper.find('.show_hide_button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('return event to collapse', () => {
    EventWrapper.setState({ collapsed: false });
    EventWrapper.find('.show_hide_button').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });


});