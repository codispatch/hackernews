import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import setupStore from './setup-store';

describe('Store util function', () => {
  it('should test for setupStore', () => {
   expect(setupStore).toBeDefined()
  });
});