import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Routes from './routes';

describe('Routes Component', () => {

  it('should test for routes function when num = 1', () => {
   expect(Routes).toBeDefined
  });

});