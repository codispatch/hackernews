import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import rootReducer from './root-reducer';

describe('Root reducer Component', () => {
  it('should test for root-reducer', () => {
   expect(rootReducer()).toBeDefined()
  });
});