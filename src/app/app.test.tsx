import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from './app';
import { setCurrentAppStatus, setCurrentPageNumber, getNewsDetailsData, setUpVoteCount, hideStoryItem } from "../app/_duck/actions";

export const data = [{ "created_at": "2018-03-14T03:50:30.000Z", "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title", "story_url": "", "objectID": "16582136" }]
export const data1 = { "created_at": "2020-03-14T03:50:30.000Z", "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title", "story_url": "", "objectID": "16582136" }
export const data2 = { "created_at": "2021-07-14T03:50:30.000Z", "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title", "story_url": "", "objectID": "16582136" }
export const data3= { "created_at": new Date(-2), "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title", "story_url": "", "objectID": "16582136" }

describe('App Component', () => {

    it('Should render without errors when data is provided - APP_INITIALIZE', () => {
        const wrapper = shallow(<App
            currentAppStatus="APP_INITIALIZE"
            currentPageNumber={1}
            setCurrentAppStatus={setCurrentAppStatus}
            setCurrentPageNumber={setCurrentPageNumber}
            getNewsDetailsData={getNewsDetailsData}
            newsDetailsData={data}
            setUpVoteCount={setUpVoteCount}
            hideStoryItem={hideStoryItem} />)
        expect(wrapper).toBeDefined();
    });

    it('Should render without errors when data is provided - APP_RUNNING', () => {
        const wrapper = shallow(<App
            currentAppStatus="APP_RUNNING"
            currentPageNumber={1}
            setCurrentAppStatus={setCurrentAppStatus}
            setCurrentPageNumber={setCurrentPageNumber}
            getNewsDetailsData={getNewsDetailsData}
            newsDetailsData={data}
            setUpVoteCount={setUpVoteCount}
            hideStoryItem={hideStoryItem} />)
        expect(wrapper).toBeDefined();
    });

    it('Should render without errors when no-data is provided - APP_RUNNING', () => {
        const wrapper = shallow(<App
            currentAppStatus="APP_RUNNING"
            currentPageNumber={1}
            setCurrentAppStatus={setCurrentAppStatus}
            setCurrentPageNumber={setCurrentPageNumber}
            getNewsDetailsData={getNewsDetailsData}
            newsDetailsData={[]}
            setUpVoteCount={setUpVoteCount}
            hideStoryItem={hideStoryItem} />)
        expect(wrapper).toBeDefined();
    });
    it('Should render without errors when data is provided - NO APP STATUS', () => {
        const wrapper = shallow(<App
            currentAppStatus=""
            currentPageNumber={1}
            setCurrentAppStatus={setCurrentAppStatus}
            setCurrentPageNumber={setCurrentPageNumber}
            getNewsDetailsData={getNewsDetailsData}
            newsDetailsData={data}
            setUpVoteCount={setUpVoteCount}
            hideStoryItem={hideStoryItem} />)
        expect(wrapper).toBeDefined();
    });
    it('should test for renderVoteCount function when rowData is given', () => {
        expect(new App({currentPageNumber:2}).renderVoteCount(data1)).toBeDefined();
    });
    it('should test for renderUpVote function when rowData is given', () => {
        expect(new App({setUpVoteCount:setUpVoteCount,currentPageNumber:2}).renderUpVote(data1,2,setUpVoteCount,hideStoryItem)).toBeDefined();
    });
    it('should test for renderNewDetails function when rowData is given - data1', () => {
        expect(new App({hideStoryItem:hideStoryItem,currentPageNumber:2}).renderNewDetails(data1,2,setUpVoteCount,hideStoryItem)).toBeDefined();
    });
    it('should test for renderNewDetails function when rowData is given - data2', () => {
        expect(new App({hideStoryItem:hideStoryItem,currentPageNumber:2}).renderNewDetails(data2,2,setUpVoteCount,hideStoryItem)).toBeDefined();
    });
    it('should test for renderNewDetails function when rowData is given - data3', () => {
        expect(new App({hideStoryItem:hideStoryItem,currentPageNumber:2}).renderNewDetails(data3,2,setUpVoteCount,hideStoryItem)).toBeDefined();
    });
});