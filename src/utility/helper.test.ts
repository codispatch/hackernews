import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import util from './helper';

export const responseData1 = { data: { data: { hits: [{ "created_at": "2018-03-14T03:50:30.000Z", "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title", "story_url": "", "objectID": "12211" }] } } };
export const responseData2 = { data: { data: { hits: [{ "created_at": "2018-03-14T03:50:30.000Z", "title": "Stephen Hawking has died", "url": "http://www.bbc.com/news/uk-43396008", "author": "Cogito", "points": 6015, "num_comments": 436, "story_id": 12232, "story_title": "test title", "story_url": "", "objectID": "12212" }] } } };

describe('Helper Component', () => {
    it('should test for setLocalStorageObject when value is new and operation is INC_VOTE', () => {
        expect(util.setLocalStorageObject(12211, "INC_VOTE", 121)).toBeUndefined(); // returns empty
    });
    it('should test for setLocalStorageObject when value is old and operation is INC_VOTE', () => {
        expect(util.setLocalStorageObject(12211, "INC_VOTE", 122)).toBeUndefined();
    });
    it('should test for setLocalStorageObject when value is new and operation is HIDE_STORY', () => {
        expect(util.setLocalStorageObject(12212, "HIDE_STORY", true)).toBeUndefined();
    });
    it('should test for setLocalStorageObject when value is old and operation is HIDE_STORY', () => {
        expect(util.setLocalStorageObject(12212, "HIDE_STORY", false)).toBeUndefined(); // returns empty
    });

    it('should test for getLocalStorageObject when operation is INC_VOTE', () => {
        expect(util.getLocalStorageObject(responseData1)).toBeTruthy();
    });

    it('should test for getLocalStorageObject when operation is HIDE_STORY', () => {
        expect(util.getLocalStorageObject(responseData2)).toBeTruthy();
    });
});