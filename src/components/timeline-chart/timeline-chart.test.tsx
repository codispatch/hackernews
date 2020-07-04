import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import TimelineChart from './timeline-chart';

export const data = [{ "created_at": "2018-03-14T03:50:30.000Z",  "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title","story_url":"","objectID": "16582136"}]

describe('TimelineChart Component', () => {

  it('Should render without errors when data is provided', () => {
   const wrapper = shallow(<TimelineChart newsDetailsData={data}/>)
   expect(wrapper).toBeDefined();
  });

  it('Should render empty when no data is provided', () => {
    const wrapper = shallow(<TimelineChart newsDetailsData={[]}/>)
    expect(wrapper).toBeDefined();
   });
  
});