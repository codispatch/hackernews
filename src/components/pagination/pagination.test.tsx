import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Pagination from './pagination';

describe('Pagination Component', () => {

  it('Should render without errors when data is provided', () => {
   const wrapper = shallow(<Pagination currentPageNumber={2} />)
   expect(wrapper).toBeDefined();
  });

  it('should test for getPrevPageNumber function when num = 1', () => {
    expect(new Pagination({currentPageNumber:2}).getPrevPageNumber(1)).toBeDefined();
  });

  it('should test for getPrevPageNumber function when num != 1', () => {
    expect(new Pagination({currentPageNumber:2}).getPrevPageNumber(2)).toBeDefined();
  });

  it('should test for getNextPageNumber function when num = 1', () => {
    expect(new Pagination({currentPageNumber:2}).getNextPageNumber(1)).toBeDefined();
  });

  it('should test for getNextPageNumber function when num is undefined', () => {
    expect(new Pagination({currentPageNumber:2}).getNextPageNumber(undefined)).toBe(2);
  });
  
});