import React from 'react';
import { shallow,configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import NewsDetails, { Column } from './news-details';
import {getNewsDetailsData,setUpVoteCount,hideStoryItem} from "../../app/_duck/actions";

export const data = [{ "created_at": "2018-03-14T03:50:30.000Z",  "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title","story_url":"","objectID": "16582136"}]

describe('NewsDetails Component', () => {

  it('Should render without errors when data is provided', () => {
   const wrapper = shallow(<NewsDetails 
  data={data}
  showColumnHeader={true}
  children={(<Column name="num_comments" align="center" width={10} displayName="Comments" ></Column>)}
  getNewsDetailsData={getNewsDetailsData}
  newsDetailsData={data}
  currentPageNumber={2}
  setUpVoteCount={setUpVoteCount}
  hideStoryItem={hideStoryItem} />)
   expect(wrapper).toBeDefined();
  });

  it('should test for getTextAlignment function when alignment is left', () => {
    expect(new NewsDetails({
        data:data,
        showColumnHeader:true,
        currentPageNumber:2,
        newsDetailsData:data,
        children:(<Column name="num_comments" align="center" width={10} displayName="Comments" ></Column>),
        getNewsDetailsData:getNewsDetailsData,
        setUpVoteCount:setUpVoteCount,
        hideStoryItem:hideStoryItem
    }).getTextAlignment("left")).toBe("text-left");
  });

  it('should test for getTextAlignment function when alignment is center', () => {
    expect(new NewsDetails({
        data:data,
        showColumnHeader:true,
        currentPageNumber:2,
        newsDetailsData:data,
        children:(<Column name="num_comments" align="center" width={10} displayName="Comments" ></Column>),
        getNewsDetailsData:getNewsDetailsData,
        setUpVoteCount:setUpVoteCount,
        hideStoryItem:hideStoryItem
    }).getTextAlignment("center")).toBe("text-center");
  });

  it('should test for getTextAlignment function when alignment is right', () => {
    expect(new NewsDetails({
        data:data,
        showColumnHeader:true,
        currentPageNumber:2,
        newsDetailsData:data,
        children:(<Column name="num_comments" align="center" width={10} displayName="Comments" ></Column>),
        getNewsDetailsData:getNewsDetailsData,
        setUpVoteCount:setUpVoteCount,
        hideStoryItem:hideStoryItem
    }).getTextAlignment("right")).toBe("text-right");
  });

  it('should test for renderTableHeader function when showHeader is true', () => {
    expect(new NewsDetails({
        data:data,
        showColumnHeader:true,
        currentPageNumber:2,
        newsDetailsData:data,
    children:([<Column name="num_comments" align="center" width={10} displayName="Comments" ></Column>]),
        getNewsDetailsData:getNewsDetailsData,
        setUpVoteCount:setUpVoteCount,
        hideStoryItem:hideStoryItem
    }).renderTableHeader()).toBeDefined();
  });

  it('should test for renderTableHeader function when showHeader is true and width is passed empty', () => {
    expect(new NewsDetails({
        data:data,
        showColumnHeader:true,
        currentPageNumber:2,
        newsDetailsData:data,
    children:([<Column name="num_comments" align="center"  displayName="Comments" ></Column>]),
        getNewsDetailsData:getNewsDetailsData,
        setUpVoteCount:setUpVoteCount,
        hideStoryItem:hideStoryItem
    }).renderTableHeader()).toBeDefined();
  });

  it('should test for renderTableBody function', () => {
    expect(new NewsDetails({
        data:data,
        showColumnHeader:true,
        currentPageNumber:2,
        newsDetailsData:data,
    children:([<Column name="num_comments" align="center" width={10} displayName="Comments" ></Column>]),
        getNewsDetailsData:getNewsDetailsData,
        setUpVoteCount:setUpVoteCount,
        hideStoryItem:hideStoryItem
    }).renderTableBody()).toBeDefined();
  });

  it('should test for renderTableBody function when customRendere is passed', () => {
    const renderVoteCount=(rowData: any) =>{ return (<div >{rowData["points"]}</div>);}
    expect(new NewsDetails({
        data:data,
        showColumnHeader:true,
        currentPageNumber:2,
        newsDetailsData:data,
        children:([<Column name="num_comments" align="center" width={10} displayName="Comments" customRenderer={renderVoteCount} ></Column>]),
        getNewsDetailsData:getNewsDetailsData,
        setUpVoteCount:setUpVoteCount,
        hideStoryItem:hideStoryItem
    }).renderTableBody()).toBeDefined();
  });

});